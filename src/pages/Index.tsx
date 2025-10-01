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
      <section className="relative bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Workplace safety" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            HSE Flash Memo Generator
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Daily safety reminders to keep your workplace safe and healthy. Generate instant flash memos on critical HSE topics.
          </p>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-12 px-4 border-b bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-end">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-foreground mb-2">
                <Filter className="inline h-4 w-4 mr-1" />
                Filter by Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
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
              <label className="block text-sm font-medium text-foreground mb-2">
                Select Specific Topic (Optional)
              </label>
              <Select value={selectedTopicId} onValueChange={setSelectedTopicId}>
                <SelectTrigger>
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
              size="lg" 
              className="md:min-w-[200px] gap-2 h-11"
            >
              <Sparkles className="h-5 w-5" />
              Generate Flash Memo
            </Button>
          </div>

          {/* Info Text */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
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
      <section className="py-12 px-4">
        {currentTopic ? (
          <FlashMemoCard topic={currentTopic} />
        ) : (
          <div className="max-w-5xl mx-auto text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              No Flash Memo Generated Yet
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Click the "Generate Flash Memo" button above to create your daily safety reminder.
            </p>
            <Button onClick={generateFlashMemo} size="lg" className="gap-2">
              <Sparkles className="h-5 w-5" />
              Generate Your First Flash Memo
            </Button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 mt-12">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            HSE Flash Memo Generator • Promoting workplace safety and mental health awareness
          </p>
          <p className="mt-2">
            Topics cover safety at work, stress management, anxiety, and depression prevention
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
