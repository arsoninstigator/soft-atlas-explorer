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
import Conflict from "@/wandery/pages/Conflict";
import Conflicts from "@/wandery/pages/Conflicts";
import Archive from "@/wandery/pages/Archive";
import { useParams } from "react-router-dom";
import HistoryIndex from "@/wandery/pages/history/HistoryIndex";
import Wars from "@/wandery/pages/history/Wars";
import WarDetail from "@/wandery/pages/history/WarDetail";
import Trade from "@/wandery/pages/history/Trade";
import TradeDetail from "@/wandery/pages/history/TradeDetail";
import Attacks from "@/wandery/pages/history/Attacks";
import AttackDetail from "@/wandery/pages/history/AttackDetail";
import Events from "@/wandery/pages/history/Events";
import EventDetail from "@/wandery/pages/history/EventDetail";

const ConflictRoute = () => {
  const { id } = useParams<{ id: string }>();
  return <Conflict id={id ?? "kashmir"} />;
};
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
          <Route path="/country/unitedkingdom" element={<Atlas region="unitedkingdom" />} />
          <Route path="/country/australia" element={<Atlas region="australia" />} />
          <Route path="/country/newzealand" element={<Atlas region="newzealand" />} />
          <Route path="/country/india" element={<Atlas region="india" />} />
          <Route path="/conflicts" element={<Conflicts />} />
          <Route path="/conflict/:id" element={<ConflictRoute />} />
          <Route path="/archive/:iso" element={<Archive />} />
          <Route path="/history" element={<HistoryIndex />} />
          <Route path="/history/wars" element={<Wars />} />
          <Route path="/history/wars/:id" element={<WarDetail />} />
          <Route path="/history/trade" element={<Trade />} />
          <Route path="/history/trade/:id" element={<TradeDetail />} />
          <Route path="/history/attacks" element={<Attacks />} />
          <Route path="/history/attacks/:id" element={<AttackDetail />} />
          <Route path="/history/events" element={<Events />} />
          <Route path="/history/events/:id" element={<EventDetail />} />
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
