"use client";

import { useState } from "react";
import { DUMMY_LINKS } from "@/data/links";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [links, setLinks] = useState(DUMMY_LINKS);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newLink, setNewLink] = useState({ title: "", url: "" });

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLink.title || !newLink.url) return;

    const addedLink = {
      id: Date.now().toString(),
      title: newLink.title,
      url: newLink.url,
      // Default placeholder if Icon is missing
    };

    setLinks([...links, addedLink]);
    setNewLink({ title: "", url: "" });
    setIsDialogOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 overflow-hidden text-slate-900 selection:bg-purple-200">
      {/* Background Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/50 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-pulse" />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300/50 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-pulse" 
        style={{ animationDelay: '2s' }} 
      />

      <div className="relative w-full max-w-md space-y-12 z-10 pb-12">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-6 mt-16">
          <div className="relative group">
            {/* 3D Glow Border Effect on Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative h-28 w-28 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
              <span className="text-5xl">✨</span>
            </div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600">
              MyLink
            </h1>
            <p className="text-base text-slate-500 font-medium tracking-wide">Creative & Developer Portfolio</p>
          </div>
        </div>

        {/* Links List */}
        <div className="flex flex-col gap-5">
          {links.map((link) => {
            const Icon = link.Icon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus:outline-none focus:ring-2 focus:ring-purple-400/50 rounded-2xl"
              >
                <Card className="relative overflow-hidden transition-all duration-500 hover:scale-[1.02] bg-white/40 hover:bg-white/60 border-white/60 hover:border-white backdrop-blur-xl shadow-sm hover:shadow-purple-500/10">
                  {/* Sweep Light Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
                  
                  <CardContent className="flex items-center p-5 min-h-[76px] relative z-10">
                    <div className="flex-none basis-14 flex justify-center items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-500 group-hover:text-slate-900 group-hover:bg-slate-200 transition-all duration-300 border border-slate-200">
                        {Icon ? <Icon className="h-6 w-6 font-bold" weight="regular" /> : <span className="text-xl">🔗</span>}
                      </div>
                    </div>
                    <div className="flex-1 text-center font-semibold text-[17px] text-slate-700 group-hover:text-slate-900 transition-colors pr-14 tracking-wide">
                      {link.title}
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>

      {/* Add Link Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger 
          render={<Button className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white border-0 hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center p-0" aria-label="Add Link" />}
        >
          <span className="text-3xl font-light leading-none mb-1">+</span>
        </DialogTrigger>
        <DialogContent className="w-[90%] max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">새 링크 추가</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddLink} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-slate-700">링크 제목</Label>
              <Input 
                id="title" 
                placeholder="예: 내 포트폴리오" 
                value={newLink.title}
                onChange={(e) => setNewLink({...newLink, title: e.target.value})}
                className="rounded-xl"
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="url" className="text-slate-700">URL 주소</Label>
              <Input 
                id="url" 
                placeholder="https://..." 
                type="url"
                value={newLink.url}
                onChange={(e) => setNewLink({...newLink, url: e.target.value})}
                className="rounded-xl"
              />
            </div>
            <Button type="submit" className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white mt-6 h-12">
              추가하기
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
