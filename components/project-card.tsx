"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import VimeoPlayer from "@vimeo/player"
import { CheckCircleIcon, LinkIcon } from "lucide-react"

interface ProjectCardProps {
  title: string
  iframeSrc?: string
  description: string
  features?: string[]
  technologies: string[]
  vimeoId?: string
  vimeoChapters?: { name: string; time: number }[]
  link?: string
}

export default function ProjectCard({
  title,
  iframeSrc,
  description,
  features,
  technologies,
  vimeoId,
  vimeoChapters,
  link,
}: ProjectCardProps) {
  const vimeoPlayerRef = useRef<HTMLIFrameElement>(null)
  const playerInstance = useRef<VimeoPlayer | null>(null)

  useEffect(() => {
    if (vimeoId && vimeoPlayerRef.current) {
      playerInstance.current = new VimeoPlayer(vimeoPlayerRef.current)

      playerInstance.current.on("play", () => {
        console.log("Vimeo video is playing")
      })
      playerInstance.current.on("pause", () => {
        console.log("Vimeo video is paused")
      })
    }

    return () => {
      if (playerInstance.current) {
        playerInstance.current.destroy()
      }
    }
  }, [vimeoId])

  const skipToChapter = (time: number) => {
    if (playerInstance.current) {
      playerInstance.current
        .setCurrentTime(time)
        .then(() => {
          playerInstance.current?.play()
        })
        .catch((error) => {
          console.error("Error seeking to time: ", error)
        })
    }
  }

  return (
    <Card className="bg-portfolio-card-bg shadow-lg rounded-xl p-6 md:p-8 border border-portfolio-border flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl md:text-3xl font-bold text-portfolio-primary-blue mb-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 flex-grow flex flex-col">
        {(iframeSrc || vimeoId) && (
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-md bg-gray-100 flex-shrink-0">
            {iframeSrc && (
              <iframe
                src={iframeSrc}
                title={title}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {vimeoId && (
              <iframe
                id={`vimeo-player-${vimeoId}`}
                ref={vimeoPlayerRef}
                src={`https://player.vimeo.com/video/${vimeoId}?api=1&player_id=vimeo-player-${vimeoId}`}
                title={title}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        )}

        {vimeoChapters && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {vimeoChapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => skipToChapter(chapter.time)}
                className="text-portfolio-accent-teal hover:underline text-base font-medium px-3 py-1 rounded-full bg-portfolio-accent-teal/10 transition-colors hover:bg-portfolio-accent-teal/20"
              >
                {chapter.name}
              </button>
            ))}
          </div>
        )}

        <p className="text-portfolio-text text-base md:text-lg flex-grow">{description}</p>

        {features && features.length > 0 && (
          <div>
            <h4 className="text-xl font-semibold text-portfolio-primary-blue mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1 text-portfolio-text">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div>
            <h4 className="text-xl font-semibold text-portfolio-primary-blue mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-portfolio-primary-blue/10 text-portfolio-primary-blue px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {link && (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-portfolio-primary-blue hover:underline font-medium text-lg"
            >
              <LinkIcon className="h-5 w-5 mr-2" /> View Live Demo
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
