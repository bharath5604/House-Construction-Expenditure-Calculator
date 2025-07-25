import React, { useState, useCallback } from 'react';
import { Plus, Trash2, Home, Calculator, Hammer, Building2, Zap, TrendingUp } from 'lucide-react';
import HolographicHouse from './components/HolographicHouse';
import './styles/holographic.css';

interface ConstructionItem {
  id: string;
  name: string;
  length: number;
  width: number;
  quantity: number;
  price: number;
}

interface Room {
  id: string;
  name: string;
  items: ConstructionItem[];
}

function App() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [gstRate, setGstRate] = useState<number>(18);

  const addRoom = useCallback(() => {
    const newRoom: Room = {
      id: Date.now().toString(),
      name: '',
      items: []
    };
    setRooms(prev => [...prev, newRoom]);
  }, []);

  const removeRoom = useCallback((roomId: string) => {
    setRooms(prev => prev.filter(room => room.id !== roomId));
  }, []);

  const updateRoomName = useCallback((roomId: string, name: string) => {
    setRooms(prev => prev.map(room => 
      room.id === roomId ? { ...room, name } : room
    ));
  }, []);

  const addConstructionItem = useCallback((roomId: string) => {
    const newItem: ConstructionItem = {
      id: Date.now().toString(),
      name: '',
      length: 0,
      width: 0,
      quantity: 1,
      price: 0
    };
    setRooms(prev => prev.map(room => 
      room.id === roomId 
        ? { ...room, items: [...room.items, newItem] }
        : room
    ));
  }, []);

  const removeConstructionItem = useCallback((roomId: string, itemId: string) => {
    setRooms(prev => prev.map(room => 
      room.id === roomId 
        ? { ...room, items: room.items.filter(item => item.id !== itemId) }
        : room
    ));
  }, []);

  const updateConstructionItem = useCallback((roomId: string, itemId: string, field: keyof ConstructionItem, value: string | number) => {
    setRooms(prev => prev.map(room => 
      room.id === roomId 
        ? {
            ...room,
            items: room.items.map(item => 
              item.id === itemId ? { ...item, [field]: value } : item
            )
          }
        : room
    ));
  }, []);

  const calculateItemTotal = useCallback((item: ConstructionItem) => {
    const area = item.length * item.width;
    return area * item.quantity * item.price;
  }, []);

  const calculateRoomTotal = useCallback((room: Room) => {
    return room.items.reduce((total, item) => total + calculateItemTotal(item), 0);
  }, [calculateItemTotal]);

  const calculateGrandTotal = useCallback(() => {
    return rooms.reduce((total, room) => total + calculateRoomTotal(room), 0);
  }, [rooms, calculateRoomTotal]);

  const grandTotal = calculateGrandTotal();
  const gstAmount = (grandTotal * gstRate) / 100;
  const finalTotal = grandTotal + gstAmount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  House Construction Expenditure
                </h1>
                <p className="text-sm text-cyan-200/80">Calculate construction costs room by room</p>
              </div>
            </div>
            <button
              onClick={addRoom}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Room
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with Holographic House */}
      {rooms.length === 0 && (
        <div className="relative z-10 py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <HolographicHouse />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6 mt-8">
              Smart Construction Calculator
            </h2>
            <p className="text-xl text-cyan-100/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Plan your dream home with precision. Calculate construction costs room by room with our advanced 3D visualization system.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <Calculator className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-medium">Real-time Calculations</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-white font-medium">Cost Optimization</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-white font-medium">Instant Updates</span>
              </div>
            </div>
            <button
              onClick={addRoom}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transform"
            >
              <Plus className="w-6 h-6 mr-3" />
              Start Your Project
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Rooms Section */}
          <div className="xl:col-span-2 space-y-6">
            {rooms.length > 0 && (
              rooms.map((room) => (
                <div key={room.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] transform">
                  {/* Room Header */}
                  <div className="bg-gradient-to-r from-white/10 to-cyan-500/10 px-6 py-5 border-b border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <input
                          type="text"
                          value={room.name}
                          onChange={(e) => updateRoomName(room.id, e.target.value)}
                          placeholder="Enter room name (e.g., Living Room, Kitchen, Bathroom)"
                          className="w-full text-xl font-bold text-white bg-transparent border-none outline-none placeholder-cyan-200/60 focus:placeholder-cyan-200/40"
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <p className="text-sm text-cyan-200/80">Room Total</p>
                          <p className="text-xl font-bold text-white">₹{calculateRoomTotal(room).toLocaleString()}</p>
                        </div>
                        <button
                          onClick={() => removeRoom(room.id)}
                          className="p-3 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl transition-all duration-200 hover:scale-110 transform"
                          title="Remove Room"
                        >
                          <Trash2 className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Construction Items Table */}
                  <div className="p-6">
                    {room.items.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-cyan-200/70 mb-4">No construction items added to this room yet.</p>
                        <button
                          onClick={() => addConstructionItem(room.id)}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 transform shadow-lg"
                        >
                          <Plus className="w-5 h-5 mr-2" />
                          Add Construction Item
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-white/20">
                                <th className="text-left py-4 px-3 text-sm font-bold text-cyan-200">Item Name</th>
                                <th className="text-left py-4 px-3 text-sm font-bold text-cyan-200 w-20">Length</th>
                                <th className="text-left py-4 px-3 text-sm font-bold text-cyan-200 w-20">Width</th>
                                <th className="text-left py-4 px-3 text-sm font-bold text-cyan-200 w-20">Area</th>
                                <th className="text-left py-4 px-3 text-sm font-bold text-cyan-200 w-20">Qty</th>
                                <th className="text-left py-4 px-3 text-sm font-bold text-cyan-200 w-24">Price/sq.ft</th>
                                <th className="text-left py-4 px-3 text-sm font-bold text-cyan-200 w-28">Total (₹)</th>
                                <th className="w-12"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {room.items.map((item) => (
                                <tr key={item.id} className="border-b border-white/10 hover:bg-white/5 transition-all duration-200">
                                  <td className="py-4 px-3">
                                    <input
                                      type="text"
                                      value={item.name}
                                      onChange={(e) => updateConstructionItem(room.id, item.id, 'name', e.target.value)}
                                      placeholder="e.g., Tiles, Paint"
                                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-200 text-white placeholder-slate-400"
                                    />
                                  </td>
                                  <td className="py-4 px-3">
                                    <input
                                      type="number"
                                      value={item.length}
                                      onChange={(e) => updateConstructionItem(room.id, item.id, 'length', parseFloat(e.target.value) || 0)}
                                      min="0"
                                      step="0.1"
                                      placeholder="ft"
                                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-200 text-white placeholder-slate-400"
                                    />
                                  </td>
                                  <td className="py-4 px-3">
                                    <input
                                      type="number"
                                      value={item.width}
                                      onChange={(e) => updateConstructionItem(room.id, item.id, 'width', parseFloat(e.target.value) || 0)}
                                      min="0"
                                      step="0.1"
                                      placeholder="ft"
                                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-200 text-white placeholder-slate-400"
                                    />
                                  </td>
                                  <td className="py-4 px-3">
                                    <span className="text-sm font-bold text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-lg">
                                      {(item.length * item.width).toFixed(1)} sq.ft
                                    </span>
                                  </td>
                                  <td className="py-4 px-3">
                                    <input
                                      type="number"
                                      value={item.quantity}
                                      onChange={(e) => updateConstructionItem(room.id, item.id, 'quantity', parseInt(e.target.value) || 0)}
                                      min="1"
                                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-200 text-white placeholder-slate-400"
                                    />
                                  </td>
                                  <td className="py-4 px-3">
                                    <input
                                      type="number"
                                      value={item.price}
                                      onChange={(e) => updateConstructionItem(room.id, item.id, 'price', parseFloat(e.target.value) || 0)}
                                      min="0"
                                      step="0.01"
                                      placeholder="₹"
                                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-200 text-white placeholder-slate-400"
                                    />
                                  </td>
                                  <td className="py-4 px-3">
                                    <span className="font-bold text-white text-lg">
                                      ₹{calculateItemTotal(item).toLocaleString()}
                                    </span>
                                  </td>
                                  <td className="py-4 px-3">
                                    <button
                                      onClick={() => removeConstructionItem(room.id, item.id)}
                                      className="p-3 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl transition-all duration-200 hover:scale-110 transform"
                                      title="Remove Item"
                                    >
                                      <Trash2 className="w-5 h-5" />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/20">
                          <button
                            onClick={() => addConstructionItem(room.id)}
                            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-cyan-200 font-medium rounded-xl transition-all duration-200 hover:scale-105 transform backdrop-blur-sm border border-white/20"
                          >
                            <Plus className="w-5 h-5 mr-2" />
                            Add Item
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary Section */}
          <div className="xl:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 sticky top-8 shadow-2xl">
              <div className="p-6 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Construction Cost Summary</h2>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {rooms.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="p-4 bg-cyan-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Home className="w-8 h-8 text-cyan-400" />
                    </div>
                    <p className="text-cyan-200/70">Add rooms and construction items to see cost breakdown</p>
                  </div>
                ) : (
                  <>
                    {/* Room-wise breakdown */}
                    <div className="space-y-3">
                      {rooms.map((room) => (
                        <div key={room.id} className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 rounded-lg px-3 transition-all duration-200">
                          <span className="text-cyan-200 font-medium">
                            {room.name || 'Unnamed Room'}
                          </span>
                          <span className="font-bold text-white">
                            ₹{calculateRoomTotal(room).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/20 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-200 font-medium text-lg">Subtotal</span>
                        <span className="font-bold text-white text-lg">₹{grandTotal.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-cyan-200 font-medium">GST</span>
                          <input
                            type="number"
                            value={gstRate}
                            onChange={(e) => setGstRate(parseFloat(e.target.value) || 0)}
                            min="0"
                            max="100"
                            step="0.1"
                            className="w-16 px-3 py-2 text-sm bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-white"
                          />
                          <span className="text-cyan-200/70">%</span>
                        </div>
                        <span className="font-bold text-white">₹{gstAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t-2 border-cyan-400/30">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-white">Total Construction Cost</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          ₹{finalTotal.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating action button for mobile */}
        {rooms.length > 0 && (
          <div className="fixed bottom-6 right-6 md:hidden z-20">
            <button onClick={addRoom} className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl hover:scale-110 transform transition-all duration-300">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;