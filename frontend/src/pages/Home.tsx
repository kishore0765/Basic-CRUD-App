import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const API_URL = 'http://localhost:3000/api/quotes'

const Home = () => {
  const [quotes, setQuotes] = useState<{ id: number; text: string }[]>([])
  const [newQuote, setNewQuote] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  // Fetch all quotes
  const fetchQuotes = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setQuotes(data)
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  // Add a new quote
  const handleAdd = async () => {
    if (!newQuote.trim()) return
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newQuote })
    })
    if (res.ok) {
      setNewQuote('')
      fetchQuotes()
    }
  }

  // Delete a quote
  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    fetchQuotes()
  }

  // Start editing
  const handleEdit = (id: number, text: string) => {
    setEditingId(id)
    setEditText(text)
  }

  // Save edit
  const handleSave = async (id: number) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: editText })
    })
    if (res.ok) {
      setEditingId(null)
      setEditText('')
      fetchQuotes()
    }
  }

  return (
    <div className="max-w-lg mx-auto p-4 rounded-md ">
      <h1 className="text-2xl font-bold mb-5 text-center">Quote-Board 📃</h1>

      {/* Add new quote */}
      <div className="flex gap-3 mb-6">
        <Input
          className="w-full rounded-md border-black-200"
          placeholder="Write your Quote..."
          value={newQuote}
          onChange={(e) => setNewQuote(e.target.value)}
        />
        <Button
          className="bg-blue-700 hover:bg-blue-800 text-white"
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>

      {/* List quotes */}
      <ul className="space-y-3 bg-gray-200">
        {quotes.map((quote) => (
          <li
            key={quote.id}
            className="flex items-center gap-3 border p-2 rounded-md"
          >
            {editingId === quote.id ? (
              <Input
                value={editText}
                className='w-full rounded-md border-gray-300 bg-white'
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span className="flex-1">{quote.text}</span>
            )}

            {editingId === quote.id ? (
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleSave(quote.id)}
              >
                Save
              </Button>
            ) : (
              <Button
                size="sm"
                variant="secondary"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handleEdit(quote.id, quote.text)}
              >
                Edit
              </Button>
            )}

            <Button
              size="sm"
              className='bg-red-600 hover:bg-red-700 text-white'
              onClick={() => handleDelete(quote.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
