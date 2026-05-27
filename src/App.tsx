import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/wandery/pages/Landing";
import Atlas from "@/wandery/pages/Atlas";
import About from "@/wandery/pages/About";
import Philosophy from "@/wandery/pages/Philosophy";
import Features from "@/wandery/pages/Features";
import Roadmap from "@/wandery/pages/Roadmap";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/world" element={<Atlas region="world" />} />
          <Route path="/europe" element={<Atlas region="europe" />} />
          <Route path="/america" element={<Atlas region="america" />} />
          <Route path="/northamerica" element={<Atlas region="northamerica" />} />
          <Route path="/southamerica" element={<Atlas region="southamerica" />} />
          <Route path="/mena" element={<Atlas region="mena" />} />
          <Route path="/asia" element={<Atlas region="asia" />} />
          <Route path="/africa" element={<Atlas region="africa" />} />
          <Route path="/oceania" element={<Atlas region="oceania" />} />
          <Route path="/country/canada" element={<Atlas region="canada" />} />
          <Route path="/country/unitedstates" element={<Atlas region="unitedstates" />} />
          <Route path="/about" element={<About />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/features" element={<Features />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
