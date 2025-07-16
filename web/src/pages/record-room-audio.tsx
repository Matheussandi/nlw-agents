import { useState } from "react";
import { Button } from "@/components/ui/button";

const isRecordingSupported = Boolean(navigator.mediaDevices) &&
    Boolean(navigator.mediaDevices?.getUserMedia) &&
    Boolean(window.MediaRecorder);

export function RecordRoomAudio() {
    const [isRecording, setIsRecording] = useState(false);

    function handleStartRecording() {
        if (!isRecordingSupported) {
            alert("O seu navegador não suporta gravação de áudio.");
            return;
        }

        setIsRecording(!isRecording);
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-3">
            <Button onClick={handleStartRecording}>
                Gravar áudio
            </Button>
            {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
        </div>
    )
}