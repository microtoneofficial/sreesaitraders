import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

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

/* =========================
   MongoDB Connection
========================= */

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully');
  })
  .catch((err) => {
    console.log('MongoDB Connection Error:', err);
  });

/* =========================
   Enquiry Schema
========================= */

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    default: '',
  },

  message: {
    type: String,
    required: true,
  },

  product: {
    type: String,
    default: 'General Enquiry',
  },

  status: {
    type: String,
    default: 'New',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

/* =========================
   Admin Credentials
========================= */

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

/* =========================
   Root Route
========================= */

app.get('/', (req, res) => {
  res.json({
    message: 'SST Backend API is running!',
  });
});

/* =========================
   POST Enquiry
========================= */

app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, phone, email, message, product } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        error: 'Name, phone, and message are required.',
      });
    }

    const enquiry = new Enquiry({
      name,
      phone,
      email,
      message,
      product,
    });

    await enquiry.save();

    res.status(201).json({
      success: true,
      enquiry,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: 'Server Error',
    });
  }
});

/* =========================
   GET All Enquiries
========================= */

app.get('/api/enquiries', async (req, res) => {
  try {

    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 });

    res.json({
      enquiries,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: 'Server Error',
    });
  }
});

/* =========================
   Update Status
========================= */

app.patch('/api/enquiry/:id/status', async (req, res) => {
  try {

    const { id } = req.params;
    const { status } = req.body;

    const enquiry = await Enquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        error: 'Enquiry not found',
      });
    }

    res.json({
      success: true,
      enquiry,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: 'Server Error',
    });
  }
});

/* =========================
   Delete Enquiry
========================= */

app.delete('/api/enquiry/:id', async (req, res) => {
  try {

    const { id } = req.params;

    await Enquiry.findByIdAndDelete(id);

    res.json({
      success: true,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: 'Server Error',
    });
  }
});

/* =========================
   Admin Login
========================= */

app.post('/api/admin/login', (req, res) => {

  const { email, password } = req.body;

  if (
    email === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  ) {

    res.json({
      success: true,
      token: 'sst-admin-token-secure-2024',
      name: 'SST Admin',
    });

  } else {

    res.status(401).json({
      error: 'Invalid credentials',
    });
  }
});

/* =========================
   Server Start
========================= */

app.listen(PORT, () => {
  console.log(`SST Server running on port ${PORT}`);
});