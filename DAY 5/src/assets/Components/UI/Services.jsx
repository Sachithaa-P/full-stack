
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 900, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://img.freepik.com/free-photo/doctor-talking-with-her-elder-patient_23-2148962312.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Health',
    author: 'Health care',
  },
  {
    img: 'https://img.freepik.com/free-photo/doctor-helping-senior-patient_23-2148962320.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Daily',
    author: 'Daily care',
  },
  {
    img: 'https://img.freepik.com/free-photo/old-patient-suffering-from-parkinson_23-2149370425.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Payment',
    author: 'Payment care',
  },
  {
    img: 'https://img.freepik.com/free-photo/nurse-old-man-posing-while-looking-camera_23-2148239041.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Emergency',
    author: 'Emergency care',
  },
  {
    img: 'https://img.freepik.com/free-photo/mediums-hot-smiley-people-indoors_23-2148940028.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Leisure',
    author: 'Leisure care',
  },
  {
    img: 'https://img.freepik.com/free-photo/doctor-talking-senior-man-indoors_23-2148962350.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Other',
    author: 'Other care',
  },
  {
    img: 'https://img.freepik.com/free-photo/contented-senior-patient-with-kind-doctor-nursing-home-time-together_496169-733.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Care',
    author: 'Care surgery',
  },
  {
    img: 'https://img.freepik.com/free-photo/happy-old-woman-nursing-home-sitting-couch-talking-with-her-caretaker-retired-woman-with-crutches_482257-45102.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Medical',
    author: 'Medical care',
  },
  {
    img: 'https://img.freepik.com/free-photo/close-up-woman-posing-chair_23-2148934337.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Accounting',
    author: 'Accounting care',
  },
  {
    img: 'https://img.freepik.com/free-photo/female-doctor-with-senior-woman-sitting-couch-nursing-home-writing-prescription-clipboard_482257-45168.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Care',
    author: 'Physiotherapy Home Services',
  },
  {
    img: 'https://img.freepik.com/free-photo/close-up-woman-being-fed_23-2148940042.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Diet',
    author: 'Diet plans',
  },
  {
    img: 'https://img.freepik.com/free-photo/senior-man-holding-dumbbells-with-physiotherapist-bedroom-nursing-home_554837-105.jpg?size=626&ext=jpg&ga=GA1.1.337400094.1708492883&semt=ais',
    title: 'Daily table',
    author: 'Daily care',
  },
];