// React Prototype for Virtual ID BWC Assignment Workflow
// Built with TailwindCSS and ShadCN UI

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function VirtualIDWorkflow() {
  const [selectedUser, setSelectedUser] = useState("");
  const [vidSent, setVidSent] = useState(false);
  const [linkDelivered, setLinkDelivered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [walletAdded, setWalletAdded] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Virtual ID Assignment Workflow</h1>
      <Tabs defaultValue="admin" className="w-full">
        <TabsList>
          <TabsTrigger value="admin">Admin Panel</TabsTrigger>
          <TabsTrigger value="user">User Panel</TabsTrigger>
        </TabsList>

        <TabsContent value="admin">
          <Card className="mt-4">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Send VID to User</h2>
              <Input 
                placeholder="Search or enter user email" 
                value={selectedUser} 
                onChange={(e) => setSelectedUser(e.target.value)} 
              />
              <Button 
                disabled={!selectedUser} 
                onClick={() => {
                  setVidSent(true);
                  setLinkDelivered(true);
                }}
              >Send Virtual ID Card</Button>
              {vidSent && <p className="text-green-600">VID link sent to {selectedUser}.</p>}
              {linkDelivered && <p className="text-sm text-gray-500">Delivery via SMS/email completed.</p>}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="user">
          <Card className="mt-4">
            <CardContent className="space-y-4">
              {!loggedIn ? (
                <>
                  <h2 className="text-xl font-semibold">Login to Retrieve Your VID</h2>
                  <Input placeholder="Username" />
                  <Input type="password" placeholder="Password" />
                  <Button onClick={() => setLoggedIn(true)}>Login</Button>
                </>
              ) : !walletAdded ? (
                <>
                  <h2 className="text-xl font-semibold">Download Your Virtual ID</h2>
                  <Button onClick={() => setWalletAdded(true)}>Add to Apple Wallet</Button>
                  <Button onClick={() => setWalletAdded(true)}>Add to Google Wallet</Button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold">Tap Your Camera to Assign</h2>
                  <p className="text-sm text-gray-500">Camera assigned. You’re ready to go.</p>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
