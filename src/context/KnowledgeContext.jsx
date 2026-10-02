import { useEffect, useState } from "react";
import { KnowledgeContext } from "./KnowledgeContext.js";

const initialKnowledgeBases = [
  {
    id: 1,
    name: "FYP Research",
    description: "Research papers and documentation for the Smart KB Chatbot.",
    category: "Research",
    documents: 1,
    updated: "Today",
  },
  {
    id: 2,
    name: "AI & Machine Learning",
    description: "Artificial intelligence and machine learning study materials.",
    category: "Education",
    documents: 2,
    updated: "Yesterday",
  },
  {
    id: 3,
    name: "University Notes",
    description: "University course notes and academic documents.",
    category: "Education",
    documents: 2,
    updated: "Today",
  },
  {
    id: 4,
    name: "Programming",
    description: "Programming languages, concepts, and development resources.",
    category: "Programming",
    documents: 1,
    updated: "3 days ago",
  },
];

const initialDocuments = [
  {
    id: 1,
    name: "RAG_Research_Paper.pdf",
    type: "PDF",
    size: "2.4 MB",
    pages: 12,
    knowledgeBase: "FYP Research",
    uploaded: "Today",
    status: "processed",
  },
  {
    id: 2,
    name: "AI_Notes.pdf",
    type: "PDF",
    size: "1.8 MB",
    pages: 24,
    knowledgeBase: "AI & Machine Learning",
    uploaded: "Yesterday",
    status: "processed",
  },
  {
    id: 3,
    name: "DBMS_Notes.pdf",
    type: "PDF",
    size: "4.2 MB",
    pages: 46,
    knowledgeBase: "University Notes",
    uploaded: "Today",
    status: "processing",
  },
  {
    id: 4,
    name: "Machine_Learning.docx",
    type: "DOCX",
    size: "1.2 MB",
    pages: 18,
    knowledgeBase: "AI & Machine Learning",
    uploaded: "2 days ago",
    status: "processed",
  },
  {
    id: 5,
    name: "Python_Programming.txt",
    type: "TXT",
    size: "320 KB",
    pages: null,
    knowledgeBase: "Programming",
    uploaded: "3 days ago",
    status: "pending",
  },
  {
    id: 6,
    name: "Distributed_Systems.pdf",
    type: "PDF",
    size: "3.7 MB",
    pages: 38,
    knowledgeBase: "University Notes",
    uploaded: "5 days ago",
    status: "failed",
  },
];

export function KnowledgeProvider({ children }) {
  const [knowledgeBases, setKnowledgeBases] = useState(() => {
    const savedKnowledgeBases = localStorage.getItem(
      "smartKb_knowledgeBases"
    );

    return savedKnowledgeBases
      ? JSON.parse(savedKnowledgeBases)
      : initialKnowledgeBases;
  });

  const [documents, setDocuments] = useState(() => {
    const savedDocuments = localStorage.getItem("smartKb_documents");

    return savedDocuments
      ? JSON.parse(savedDocuments)
      : initialDocuments;
  });

  useEffect(() => {
    localStorage.setItem(
      "smartKb_knowledgeBases",
      JSON.stringify(knowledgeBases)
    );
  }, [knowledgeBases]);

  useEffect(() => {
    localStorage.setItem(
      "smartKb_documents",
      JSON.stringify(documents)
    );
  }, [documents]);

  const addKnowledgeBase = (knowledgeBase) => {
    const newKnowledgeBase = {
      id: Date.now(),
      documents: 0,
      updated: "Just now",
      ...knowledgeBase,
    };

    setKnowledgeBases((previous) => [
      newKnowledgeBase,
      ...previous,
    ]);

    return newKnowledgeBase;
  };

  const updateKnowledgeBase = (id, updatedData) => {
    setKnowledgeBases((previous) =>
      previous.map((knowledgeBase) =>
        knowledgeBase.id === id
          ? {
              ...knowledgeBase,
              ...updatedData,
              updated: "Just now",
            }
          : knowledgeBase
      )
    );
  };

  const deleteKnowledgeBase = (id) => {
    const knowledgeBase = knowledgeBases.find(
      (item) => item.id === id
    );

    setKnowledgeBases((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (knowledgeBase) {
      setDocuments((previous) =>
        previous.filter(
          (document) =>
            document.knowledgeBase !== knowledgeBase.name
        )
      );
    }
  };

  const addDocuments = (newDocuments) => {
    setDocuments((previous) => [
      ...newDocuments,
      ...previous,
    ]);
  };

  const deleteDocument = (id) => {
    setDocuments((previous) =>
      previous.filter((document) => document.id !== id)
    );
  };

  const updateDocument = (id, updatedData) => {
    setDocuments((previous) =>
      previous.map((document) =>
        document.id === id
          ? {
              ...document,
              ...updatedData,
            }
          : document
      )
    );
  };

  const value = {
    knowledgeBases,
    documents,

    setKnowledgeBases,
    setDocuments,

    addKnowledgeBase,
    updateKnowledgeBase,
    deleteKnowledgeBase,

    addDocuments,
    deleteDocument,
    updateDocument,
  };

  return (
    <KnowledgeContext.Provider value={value}>
      {children}
    </KnowledgeContext.Provider>
  );
}