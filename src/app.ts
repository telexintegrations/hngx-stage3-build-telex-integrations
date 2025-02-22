import express from 'express';
import { integrationSpecSettings } from './integrationSpec';
import diskusage from 'diskusage';
import cors from 'cors';


const app = express();
const port = 4000;

// Middleware for JSON parsing and CORS
app.use(express.json());
app.use(cors());


// Disk path configuration
const path = process.platform === 'win32' ? 'C:' : '/';

// Disk check with error handling
// async function checkDiskUsage() {
//   try {
//     const { total, free, available } = diskusage.checkSync(path);
//     const used = total - free;
    
//     return {
//       bytes: { total, free, used, available },
//       human: {
//         total: `${(total / 1024 ** 3).toFixed(2)} GB`,
//         free: `${(free / 1024 ** 3).toFixed(2)} GB`,
//         used: `${(used / 1024 ** 3).toFixed(2)} GB`,
//         available: `${(available / 1024 ** 3).toFixed(2)} GB`
//       }
//     };
//   } catch (error) {
//     throw new Error(`Disk check failed: ${error.message}`);
//   }
// }

// return endpoint (triggered by external scheduler)
// app.get('/return', async (req, res) => {
//   try {
//     const diskData = await checkDiskUsage();
//     res.json({
//       status: 'success',
//       timestamp: new Date().toISOString(),
//       data: diskData
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 'error',
//       message: error.message
//     });
//   }
// });


// Tick endpoint (for receiving data)
app.post('/tick', (req: any, res: any) => {
  // Input validation
  const { data } = req.body;
  
  if (!data || typeof data !== 'object') {
    return res.status(400).json({ 
      error: 'Invalid format' 
    });
  }

  // Validate required fields
  const requiredFields = ['total', 'free', 'used', 'available'];
  const missingFields = requiredFields.filter(field => !(field in data));
  
  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Missing fields: ${missingFields.join(', ')}`
    });
  }

  // Process data
  console.log('Received disk data:', data);
  
  res.json({
    status: 'success',
    message: 'Data received and processed'
  });
});


//route to get settings of the integration
app.get('/integration', (req, res) => {
  res.json(integrationSpecSettings);
});


//home route
app.get('/', (req, res) => {
  res.send('Welcome to the Disk Space Usage Monitor!');
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
