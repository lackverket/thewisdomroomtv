"use client"

import React, { useState } from "react"
import {
  ArrowUpIcon,
  GlobeIcon,
  ImageIcon,
  MessageCircleDashedIcon,
  PaperclipIcon,
  PlusIcon,
  RotateCwIcon,
  TelescopeIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"

const PersonalMessageSection = () => {
  const [messages, setMessages] = useState<
    {
      id: string
      role: "user" | "assistant"
      text: string
    }[]
  >([])

  const [input, setInput] = useState("")

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        text: input,
      },
    ])

    setInput("")
  }

  return (
    <section className="mt-5 w-[95%] font-manrope">
      <MessageScrollerProvider>
        <div className="relative flex flex-col gap-4">
          <Card className="mx-auto border-0 rounded-none h-[560px] w-full gap-0">
            <CardHeader className="gap-1 border-b">
              <CardTitle>Hello,</CardTitle>
              <CardDescription>
                Conversations.
              </CardDescription>

              <CardAction>
                <TooltipProvider>
                    <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Clear chat"
                      onClick={() => setMessages([])}
                    >
                      <RotateCwIcon className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>

                  <TooltipContent>
                    Clear Chat
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>
              </CardAction>
            </CardHeader>

            <CardContent className="flex-1 overflow-hidden p-0">
              {messages.length === 0 ? (
                <Empty className="h-full">
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <MessageCircleDashedIcon />
                    </EmptyMedia>

                    <EmptyTitle>No Conversations Yet</EmptyTitle>

                    <EmptyDescription>
                      Type in your first question.
                    </EmptyDescription>
                  </EmptyHeader>
                </Empty>
              ) : (
                <MessageScroller>
                  <MessageScrollerViewport>
                    <MessageScrollerContent className="space-y-4 p-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.role === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            {message.text}
                          </div>
                        </div>
                      ))}
                    </MessageScrollerContent>
                  </MessageScrollerViewport>

                  <MessageScrollerButton />
                </MessageScroller>
              )}
            </CardContent>

            <CardFooter className="flex-col gap-2">
              <form
                onSubmit={handleSend}
                className="w-full"
              >
                <InputGroup>
                  <div className="flex h-14 w-full items-center px-3">
                    <input
                      value={input}
                      onChange={(e) =>
                        setInput(e.target.value)
                      }
                      placeholder="Type a message..."
                      className="w-full bg-transparent outline-none"
                    />
                  </div>

                  <InputGroupAddon align="block-end" className="pt-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <InputGroupButton
                          aria-label="More options"
                          type="button"
                          size="icon-sm"
                          variant="outline"
                        >
                          <PlusIcon />
                        </InputGroupButton>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="start"
                        side="top"
                        className="w-44"
                      >
                        <DropdownMenuItem>
                          <PaperclipIcon />
                          Add Photos & Files
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                          <ImageIcon />
                          Create Image
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                          <TelescopeIcon />
                          Deep Research
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                          <GlobeIcon />
                          Web Search
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <InputGroupButton
                      type="submit"
                      variant="default"
                      size="icon-sm"
                      disabled={!input.trim()}
                      className="ml-auto"
                    >
                      <ArrowUpIcon />
                      <span className="sr-only">
                        Send
                      </span>
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </CardFooter>
          </Card>

          <Link href="/" className="my-5 underline underline-offset-4 px-1 text-center text-sm text-muted-foreground">
            Back home
          </Link>
        </div>
      </MessageScrollerProvider>
    </section>
  )
}

export default PersonalMessageSection