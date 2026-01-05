"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X, ZoomIn } from "lucide-react"
import Image from "next/image"

export function ImageModal({
    isOpen,
    onClose,
    lightSrc,
    darkSrc,
    alt
}: {
    isOpen: boolean
    onClose: () => void
    lightSrc: string
    darkSrc: string
    alt: string
}) {
    return (
        <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-[101] flex w-full h-full max-w-[95vw] max-h-[95vh] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center p-0 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-1/2 outline-none">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={`${lightSrc}?v=3`}
                                alt={alt}
                                fill
                                className="object-contain dark:hidden"
                                priority
                                sizes="95vw"
                                quality={100}
                                unoptimized
                            />
                            <Image
                                src={`${darkSrc}?v=3`}
                                alt={alt}
                                fill
                                className="hidden object-contain dark:block"
                                priority
                                sizes="95vw"
                                quality={100}
                                unoptimized
                            />
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-[102] rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none transition-colors"
                            aria-label="Close"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    )
}
