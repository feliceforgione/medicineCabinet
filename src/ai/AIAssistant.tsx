import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai"; // Only import UIMessage
import { Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import {
  Box,
  Flex,
  Text,
  Button,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import AIProductCard from "./AIProductCard";

// Define the type guard using the type from the union
function isToolInvocationUIPart(
  part: UIMessage["parts"][number]
): part is Extract<UIMessage["parts"][number], { type: "tool-invocation" }> {
  return part.type === "tool-invocation";
}

function Messages({ messages }: { messages: Array<UIMessage> }) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!messages.length) {
    return (
      <Flex
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        color="gray.400"
      >
        Ask me anything! I&#39;m here to help.
      </Flex>
    );
  }

  return (
    <Box ref={messagesContainerRef} flex={1} overflowY="auto">
      {messages.map(({ id, role, content, parts }) => (
        <Box
          key={id}
          py={3}
          bgGradient={
            role === "assistant"
              ? "linear(to-r, orange.500/5, red.600/5)"
              : undefined
          }
          bg={role === "assistant" ? undefined : "transparent"}
        >
          {content.length > 0 && (
            <Flex alignItems="flex-start" gap={2} px={4}>
              {role === "assistant" ? (
                <Flex
                  w={6}
                  h={6}
                  borderRadius="lg"
                  bgGradient="linear(to-r, orange.500, red.600)"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="medium"
                  color="white"
                  flexShrink={0}
                >
                  AI
                </Flex>
              ) : (
                <Flex
                  w={6}
                  h={6}
                  borderRadius="lg"
                  bg="gray.700"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="medium"
                  color="white"
                  flexShrink={0}
                >
                  Y
                </Flex>
              )}
              <Box flex={1} minW={0}>
                <ReactMarkdown
                  className="prose dark:prose-invert max-w-none prose-sm"
                  rehypePlugins={[
                    rehypeRaw,
                    rehypeSanitize,
                    rehypeHighlight,
                    remarkGfm,
                  ]}
                >
                  {content}
                </ReactMarkdown>
              </Box>
            </Flex>
          )}
          {parts
            .filter(isToolInvocationUIPart) // Use the type guard
            .filter(
              (
                toolCallPart // toolCallPart is now ToolInvocationUIPart
              ) =>
                toolCallPart.toolInvocation.toolName === "recommendProduct" &&
                toolCallPart.toolInvocation.state === "result"
            )
            .map((toolCallPart) => {
              if (
                toolCallPart.toolInvocation.state === "result" &&
                !toolCallPart.toolInvocation.result?.error
              )
                return (
                  <AIProductCard
                    key={toolCallPart.toolInvocation.toolName}
                    product={toolCallPart.toolInvocation.result?.result}
                  />
                );
              return null; // Return null for cases that don't render a card
            })}
        </Box>
      ))}
    </Box>
  );
}

export default function AIAssistant() {
  const [isOpen, setOpenAIAssistant] = useState(false);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [],
    fetch: async (_url, options) => {
      const { messages: chatMessages } = JSON.parse(options!.body! as string);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/ai/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatMessages }),
      });

      return response;
    },
  });
  return (
    <Box position="relative" zIndex={50}>
      <Button
        onClick={() => setOpenAIAssistant((state) => !state)}
        display="flex"
        alignItems="center"
        gap={2}
        px={3}
        py={1}
        borderRadius="lg"
        bgGradient="linear(to-r, orange.500, red.600)"
        color="white"
        _hover={{ opacity: 0.9 }}
        transition="opacity 0.2s"
      >
        <Flex
          w={5}
          h={5}
          borderRadius="lg"
          bg="whiteAlpha.200"
          alignItems="center"
          justifyContent="center"
          fontSize="xs"
          fontWeight="medium"
        >
          AI
        </Flex>
        AI Assistant
      </Button>

      {isOpen && (
        <Box
          position="absolute"
          top="full"
          right={0}
          mt={2}
          w="700px"
          h="600px"
          bg="white"
          _dark={{ bg: "gray.800" }}
          borderRadius="lg"
          boxShadow="xl"
          border="1px"
          borderColor="orange.500"
          display="flex"
          flexDirection="column"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            p={2}
            borderBottom="1px"
            borderColor="orange.500"
          >
            <Text
              as="h3"
              fontWeight="semibold"
              color="gray"
              _dark={{ color: "white" }}
            >
              AI Assistant
            </Text>
            <IconButton
              onClick={() => setOpenAIAssistant((state) => !state)}
              aria-label="Close assistant"
              icon={<X size={16} />}
              variant="ghost"
              color="gray.400"
              _hover={{ color: "white" }}
              transition="color 0.2s"
            />
          </Flex>
          <Messages messages={messages} />
          <Box p={3} borderTop="1px" borderColor="orange.500">
            <form onSubmit={handleSubmit}>
              <Box position="relative">
                <Textarea
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  w="full"
                  borderRadius="lg"
                  border="1px"
                  borderColor="orange.300"
                  pl={3}
                  pr={10}
                  py={2}
                  fontSize="sm"
                  color="gray"
                  _dark={{ color: "white" }}
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    outline: "none",
                    ring: "2px",
                    ringColor: "orange.500",
                    borderColor: "transparent",
                  }}
                  resize="none"
                  overflow="hidden"
                  rows={1}
                  style={{ minHeight: "36px", maxHeight: "120px" }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height =
                      Math.min(target.scrollHeight, 120) + "px";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <IconButton
                  type="submit"
                  aria-label="Send message"
                  position="absolute"
                  right={2}
                  top="50%"
                  bg="transparent"
                  transform="translateY(-50%)"
                  p={1.5}
                  color="orange.500"
                  _hover={{ color: "orange.400" }}
                  _disabled={{ color: "gray.500" }}
                  transition="color 0.2s"
                  _focus={{ outline: "none" }}
                  icon={<Send size={16} />}
                />
              </Box>
            </form>
          </Box>
        </Box>
      )}
    </Box>
  );
}
