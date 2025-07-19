import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigate, useParams } from "react-router-dom";
import { env } from "@/lib/env";

const isRecordingSupported = Boolean(navigator.mediaDevices) &&
    Boolean(navigator.mediaDevices?.getUserMedia) &&
    Boolean(window.MediaRecorder);

type RoomParams = {
    roomId: string;
}

export function RecordRoomAudio() {
    const params = useParams<RoomParams>()

    const [isRecording, setIsRecording] = useState(false)

    const recorder = useRef<MediaRecorder | null>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    function handleStopRecording() {
        setIsRecording(false)

        if (recorder.current && recorder.current.state !== 'inactive') {
            recorder.current.stop()
        }

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    async function uploadAudio(audio: Blob) {
        const formData = new FormData()

        formData.append('audio', audio, `audio.webm`)

        const response = await fetch(`${env.API_URL}/rooms/${params.roomId}/audio`, {
            method: 'POST',
            body: formData
        })

        const result = response.json()

        if (!response.ok) {
            throw new Error('Erro ao enviar áudio')
        }

        return result
    }

    function createRecorder(audio: MediaStream) {
        recorder.current = new MediaRecorder(audio, {
            mimeType: 'audio/webm',
            audioBitsPerSecond: 64_000,
        })

        recorder.current.ondataavailable = event => {
            if (event.data.size > 0) {
                uploadAudio(event.data)
                    .then(() => {
                        console.log('Áudio enviado com sucesso')
                    })
                    .catch(error => {
                        console.error('Erro ao enviar áudio:', error)
                    })
            }
        }

        recorder.current.onstart = () => {
            console.log('Gravação iniciada')
        }

        recorder.current.onstop = () => {
            console.log('Gravação encerrada/pausada')
        }

        recorder.current.start()
    }

    async function handleStartRecording() {
        if (!isRecordingSupported) {
            alert("O seu navegador não suporta gravação de áudio.");
            return;
        }

        setIsRecording(true);

        const audio = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44_100,
            }
        })


        createRecorder(audio)


        intervalRef.current = setInterval(() => {
            recorder.current?.stop()

            createRecorder(audio)
        }, 5000)
    }

    if (!params.roomId) {
        return <Navigate to="/" replace />
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-3">
            {
                isRecording
                    ? <Button onClick={handleStopRecording}> Pausar gravação </Button>
                    : <Button onClick={handleStartRecording}> Gravar áudio </Button>
            }

        </div>
    )
}