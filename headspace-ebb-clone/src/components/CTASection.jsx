"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (response) {
      const utterance = new SpeechSynthesisUtterance(response);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    }
  }, [response]);

  const handleVoice = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      getBotReply(text);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setResponse("Sorry, I couldn't hear you properly.");
    };
  };

  const getBotReply = async (msg) => {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: msg })
      });

      const data = await res.json();
      const reply = data.reply || "Hmm, I didn’t quite catch that.";
      setResponse(reply);

      const utterance = new SpeechSynthesisUtterance(reply);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("Bot error:", err);
      const fallback = "Elivia had trouble thinking... try again later.";
      setResponse(fallback);
      speechSynthesis.speak(new SpeechSynthesisUtterance(fallback));
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-headspace-light-orange">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-5xl h-[200px] mb-10">
          <Image
            src="/images/CTA_Module.svg"
            alt="Chat with Elivia"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-headspace-dark-blue mb-8">
          Chat with Elivia
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 items-center mb-16">
          <p className="font-bold text-headspace-dark-blue">Already a Docure.ai member?</p>
          <Link href="#" className="text-headspace-dark-blue underline font-bold">
            Start chatting with Elivia now (mobile only)
          </Link>
        </div>

        <div className="mt-16 relative w-full max-w-xl h-[400px]">
          <Image
            src="/images/chat-module.png"
            alt="Elivia chat interface"
            fill
            style={{ objectFit: "contain" }}
            className="mx-auto"
          />
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-headspace-dark-blue mb-6">
            How should I use Elivia?
          </h3>
          <p className="text-headspace-dark-blue text-center mb-8">
            Think of Elivia like a tool in your mental health toolkit. Elivia is an AI-powered tool that's designed to help you better understand yourself. While therapy and coaching provide deeper emotional support, Elivia can help you maintain mental wellness by encouraging regular reflection and mindfulness. Elivia is not a substitute for human care, does not provide clinical mental health services and is not monitored in real time by a human. Whether you need recommendations for your next meditation or just room to unpack your day, Elivia is always here for you.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={handleVoice}
            style={{
              padding: '12px 24px',
              fontSize: '18px',
              backgroundColor: '#f4a72e',
              color: '#344964',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
            }}
          >
            🎤 Talk to Elivia
          </button>
          <p style={{ marginTop: '20px' }}>
            <strong>You said:</strong> {transcript}
          </p>
          <p>
            <strong>Elivia replied:</strong> {response}
          </p>
        </div>
      </div>
    </section>
  );
}
