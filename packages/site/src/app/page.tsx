"use client";

import { ConnectWalletButton } from "../app/components/ConnectButton";
import { MagicWandIcon, CubeIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">
        <span>
          <CubeIcon className="mr-2 h-4 w-4 inline" /> marketplace
        </span>
      </h1>
      <span className="flex justify-end">
        <ConnectWalletButton />
      </span>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">List a New Item</h2>
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Item Name"
            className="border p-2 flex-1"
          />
          <Input
            type="text"
            placeholder="Price in ETH"
            className="border p-2 flex-1"
          />
          <Button
            variant="outline"
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded duration-200 hover:shadow-xl"
          >
            <MagicWandIcon className="mr-2 h-4 w-4" />
            List Item
          </Button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Available Items</h2>
        <Card className="p-4 sm:p-6">
          <p>No items available</p>
        </Card>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Your Owned Items</h2>
        <Card className="p-4 sm:p-6">
          <p>No owned items</p>
        </Card>
      </section>
    </main>
  );
}
