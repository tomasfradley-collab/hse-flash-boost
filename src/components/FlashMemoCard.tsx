import { HSETopic } from "@/data/hseTopics";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Printer, ExternalLink, CheckCircle, XCircle } from "lucide-react";
import { useRef } from "react";
import okImage from "@/assets/example-ok.jpg";
import nokImage from "@/assets/example-nok.jpg";

interface FlashMemoCardProps {
  topic: HSETopic;
}

const FlashMemoCard = ({ topic }: FlashMemoCardProps) => {
  const printRef = useRef<HTMLDivElement>(null);

  const getCategoryBadgeVariant = (categoryId: number) => {
    switch (categoryId) {
      case 1:
        return "warning";
      case 2:
        return "default";
      case 3:
        return "destructive";
      default:
        return "default";
    }
  };

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open("", "", "width=800,height=600");
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>HSE Flash Memo - ${topic.title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
            }
            h1 {
              color: #1e40af;
              border-bottom: 3px solid #1e40af;
              padding-bottom: 10px;
            }
            .category {
              display: inline-block;
              background: #f97316;
              color: white;
              padding: 5px 15px;
              border-radius: 20px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .section {
              margin: 20px 0;
            }
            .section-title {
              font-weight: bold;
              font-size: 18px;
              margin-bottom: 10px;
              color: #1e40af;
            }
            .examples {
              display: flex;
              gap: 20px;
              margin: 20px 0;
            }
            .example {
              flex: 1;
              text-align: center;
            }
            .example img {
              max-width: 100%;
              border: 2px solid #ddd;
              border-radius: 8px;
            }
            .example-label {
              font-weight: bold;
              margin-top: 10px;
              padding: 8px;
              border-radius: 5px;
            }
            .ok-label {
              background: #22c55e;
              color: white;
            }
            .nok-label {
              background: #ef4444;
              color: white;
            }
            @media print {
              body { padding: 10px; }
            }
          </style>
        </head>
        <body>
          <h1>HSE Flash Memo</h1>
          <div class="category">${topic.category}</div>
          <h2>${topic.title}</h2>
          
          <div class="section">
            <div class="section-title">What is the Risk?</div>
            <p>${topic.description}</p>
          </div>

          <div class="section">
            <div class="section-title">Examples</div>
            <div class="examples">
              <div class="example">
                <img src="${okImage}" alt="Correct Practice" />
                <div class="example-label ok-label">✓ CORRECT PRACTICE</div>
              </div>
              <div class="example">
                <img src="${nokImage}" alt="Incorrect Practice" />
                <div class="example-label nok-label">✗ UNSAFE PRACTICE</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Safety Advice</div>
            <p>${topic.advice}</p>
          </div>

          <div class="section">
            <div class="section-title">Learn More</div>
            <p>Video resource: ${topic.videoUrl}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #ddd; text-align: center; color: #666;">
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  return (
    <div ref={printRef} className="w-full max-w-5xl mx-auto">
      <Card className="p-8 shadow-elevated">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <Badge variant={getCategoryBadgeVariant(topic.categoryId)} className="mb-3">
              {topic.category}
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-2">{topic.title}</h1>
          </div>
          <Button onClick={handlePrint} variant="outline" size="lg" className="gap-2">
            <Printer className="h-5 w-5" />
            Print PDF
          </Button>
        </div>

        {/* Description Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-3">What is the Risk?</h2>
          <p className="text-foreground leading-relaxed">{topic.description}</p>
        </div>

        {/* Examples Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* OK Example */}
            <div className="space-y-3">
              <div className="relative rounded-lg overflow-hidden border-2 border-success shadow-card">
                <img 
                  src={okImage} 
                  alt="Correct safety practice example" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-success text-success-foreground px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  CORRECT PRACTICE
                </div>
              </div>
            </div>

            {/* NOK Example */}
            <div className="space-y-3">
              <div className="relative rounded-lg overflow-hidden border-2 border-destructive shadow-card">
                <img 
                  src={nokImage} 
                  alt="Incorrect safety practice example" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  UNSAFE PRACTICE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Advice Section */}
        <div className="mb-8 bg-muted/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-primary mb-3">Safety Advice</h2>
          <p className="text-foreground leading-relaxed">{topic.advice}</p>
        </div>

        {/* Video Resource */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-primary mb-3">Learn More</h2>
          <a
            href={topic.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ExternalLink className="h-5 w-5" />
            Watch educational video on this topic
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>Generated on {new Date().toLocaleDateString()}</p>
        </div>
      </Card>
    </div>
  );
};

export default FlashMemoCard;
