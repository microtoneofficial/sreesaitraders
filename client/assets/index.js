import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://sst-client.onrender.com'
  ],
  credentials: true
}));

app.use(express.json());

// In-memory storage
let enquiries = [];

// Admin credentials
const ADMIN_EMAIL = 'sabarish@sst.com';
const ADMIN_PASSWORD = 'Sabarish_KC25';

// Root route - confirms server is running
app.get('/', (req, res) => {
  res.json({ message: 'SST Backend API is running!' });
});

// POST /api/enquiry
app.post('/api/enquiry', (req, res) => {
  const { name, phone, email, message, product } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({
      error: 'Name, phone, and message are required.',
    });
  }

  const enquiry = {
    id: uuidv4(),
    name,
    phone,
    email: email || '',
    message,
    product: product || 'General',
    createdAt: new Date().toISOString(),
    status: 'New',
  };

  enquiries.unshift(enquiry);

  res.status(201).json({
    success: true,
    enquiry,
  });
});

// GET /api/enquiries
app.get('/api/enquiries', (req, res) => {
  res.json({ enquiries });
});

// PATCH /api/enquiry/:id/status
app.patch('/api/enquiry/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const enquiry = enquiries.find((e) => e.id === id);

  if (!enquiry) {
    return res.status(404).json({ error: 'Enquiry not found' });
  }

  enquiry.status = status;
  res.json({ success: true, enquiry });
});

// DELETE /api/enquiry/:id
app.delete('/api/enquiry/:id', (req, res) => {
  const { id } = req.params;
  enquiries = enquiries.filter((e) => e.id !== id);
  res.json({ success: true });
});

// POST /api/admin/login
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    res.json({
      success: true,
      token: 'sst-admin-token-secure-2024',
      name: 'SST Admin',
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`SST Server running on port ${PORT}`);
});
