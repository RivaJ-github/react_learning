import { useState, useReducer, useEffect } from "react"

const reducer = (messages, incomingMessage) => [
    messages,
    ...incomingMessage
]

export function useChatRoom(socket, messages=[]) {
    const [status, setStatus] = useState()
    const [messages, appendMessage] = useReducer(
        reducer,
        messages
    )

    const send = message => socket.emit("message", message)

    useEffect(() => {
        socket.on("connection", () => setStatus("connected"))
        socket.on("disconnecting", () => setStatus("disconnected"))
        socket.on("message", appendMessage)
        return () => {
            socket.removeAllListeners("connect")
            socket.removeAllListeners("disconnect")
            socket.removeAllListeners("message")
        }
    },[])

    return {
        status,
        messages,
        send
    }
}