"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("ca92c935-2580-4b57-8617-f0d5ad7437b5")
    }, [])

    return null
}
