import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Container,
  Modal,
  Paper,
  Typography,
  Button,
  TextareaAutosize,
  TextField,
  Box,
  Grid,
} from '@mui/material';
import axios from 'axios';

const Announcement = () => {
  const [openModal, setOpenModal] = useState(false);
  const [announcementData, setAnnouncementData] = useState({});
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Fetch announcements from the server
    axios.get('YOUR_API_ENDPOINT') // Replace with your API endpoint
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error('Error fetching announcements:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount

  const handleOpenModal = (announcement) => {
    setAnnouncementData(announcement);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const renderAnnouncements = () => {
    return announcements.map((announcement) => (
      <Card key={announcement.announceId} style={{ marginBottom: '10px' }}>
        <CardContent>
          <Typography variant="h6">{announcement.category}</Typography>
          <img src={announcement.image} alt="No Image Uploaded" style={{ width: '100%' }} />
          <Typography>{announcement.announcement}</Typography>
          <Typography>Date: {announcement.date}</Typography>
        </CardContent>
        <Button onClick={() => handleOpenModal(announcement)}>View Details</Button>
      </Card>
    ));
  };

  return (
    <Container>
      <div style={{ marginTop: '20px' }}>
        <div>{renderAnnouncements()}</div>
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Card>
            <CardContent>
              <Typography variant="h6">ANNOUNCEMENT</Typography>
              <Box>
                <TextField label="Category" value={announcementData.category} disabled />
              </Box>
              <Box>
                <TextField label="Date" value={announcementData.date} disabled />
              </Box>
              <Box>
                <TextareaAutosize
                  aria-label="Description"
                  rowsMin={3}
                  placeholder="Description"
                  value={announcementData.announcement}
                  style={{ width: '100%' }}
                  disabled
                />
              </Box>
            </CardContent>
          </Card>
        </div>
      </Modal>
    </Container>
  );
};

export default Announcement;
