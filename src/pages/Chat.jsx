import ConversationSidebar from "../components/chat/ConversationSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import SourcePanel from "../components/chat/SourcePanel";

export default function Chat() {
  return (
    <div className="-m-6 flex h-[calc(100vh-5rem)] overflow-hidden md:-m-8">

      {/* Conversations */}
      <ConversationSidebar />

      {/* Main Chat */}
      <section className="flex min-w-0 flex-1 flex-col">

        <ChatHeader />

        <ChatWindow />

        <ChatInput />

      </section>

      {/* Sources */}
      <SourcePanel />

    </div>
  );
}