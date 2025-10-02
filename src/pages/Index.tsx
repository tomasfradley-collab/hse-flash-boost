import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FlashMemoCard from "@/components/FlashMemoCard";
import { getRandomTopic, hseTopics, categories, HSETopic } from "@/data/hseTopics";
import { Sparkles, Filter } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-safety.jpg";

const Index = () => {
  const [currentTopic, setCurrentTopic] = useState<HSETopic | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTopicId, setSelectedTopicId] = useState<string>("random");

  const generateFlashMemo = () => {
    let topic: HSETopic;

    if (selectedTopicId !== "random") {
      // User selected a specific topic
      topic = hseTopics.find(t => t.id === selectedTopicId) || getRandomTopic();
    } else if (selectedCategory !== "all") {
      // User selected a category, pick random from that category
      const categoryTopics = hseTopics.filter(
        t => t.categoryId === parseInt(selectedCategory)
      );
      topic = categoryTopics[Math.floor(Math.random() * categoryTopics.length)];
    } else {
      // Completely random
      topic = getRandomTopic();
    }

    setCurrentTopic(topic);
    toast.success("Flash memo generated!", {
      description: `Topic: ${topic.title}`,
    });
  };

  const filteredTopics = selectedCategory === "all" 
    ? hseTopics 
    : hseTopics.filter(t => t.categoryId === parseInt(selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-6 px-4">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Workplace safety" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            HSE Flash Memo Generator
          </h1>
          <p className="text-sm text-primary-foreground/90 max-w-2xl mx-auto">
            Daily safety reminders to keep your workplace safe and healthy
          </p>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-4 px-4 border-b bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 items-end">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-foreground mb-1">
                <Filter className="inline h-3 w-3 mr-1" />
                Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id.toString()}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Topic Selection */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-foreground mb-1">
                Specific Topic
              </label>
              <Select value={selectedTopicId} onValueChange={setSelectedTopicId}>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Random Topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="random">🎲 Random Topic</SelectItem>
                  {filteredTopics.map(topic => (
                    <SelectItem key={topic.id} value={topic.id}>
                      {topic.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Generate Button */}
            <Button 
              onClick={generateFlashMemo} 
              className="md:min-w-[180px] gap-2 h-9"
            >
              <Sparkles className="h-4 w-4" />
              Generate
            </Button>
          </div>

          {/* Info Text */}
          <div className="mt-2 text-center text-xs text-muted-foreground">
            <p>
              {selectedTopicId !== "random" 
                ? "You've selected a specific topic" 
                : selectedCategory !== "all"
                ? `Generating from ${categories.find(c => c.id === parseInt(selectedCategory))?.name}`
                : "Generate a random flash memo from all topics"}
            </p>
          </div>
        </div>
      </section>

      {/* Flash Memo Display */}
      <section className="py-4 px-4">
        {currentTopic ? (
          <FlashMemoCard topic={currentTopic} />
        ) : (
          <div className="max-w-6xl mx-auto text-center py-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              No Flash Memo Generated Yet
            </h2>
            <p className="text-xs text-muted-foreground">
              Click "Generate" to create your daily safety reminder
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t py-3 px-4">
        <div className="max-w-6xl mx-auto text-center text-xs text-muted-foreground">
          <p>HSE Flash Memo Generator • Workplace Safety & Mental Health Awareness</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
