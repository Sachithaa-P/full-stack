import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// import '../assets/css/Services.css';

const Services = () => {
  const navigate = useNavigate();

  const bookingf= () => {
   navigate('/booking');
  };
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/side-view-cook-making-delicious-pasta_23-2150690631.jpg?t=st=1708641104~exp=1708644704~hmac=166304d4ac782e3f37d9ee6042edaa0dac3fef6852913ddaf2bc647d07d3acad&w=900"
              alt="Cooking"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                COOKING
              </Typography>
              <Typography variant="body2" color="text.secondary">
                At our cooking service, we take pride in transforming your culinary vision into reality. With our team of skilled chefs and personalized approach, we offer a range of services tailored to your needs. Whether you're looking for weekly meal prep, intimate dinner parties, or corporate events, we're here to make every dish a masterpiece. From crafting bespoke menus to sourcing the freshest ingredients, we ensure a delightful culinary experience that exceeds your expectations. Let us take the stress out of cooking, so you can savor every moment around the table.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              BOOK
            </Button> */}
            <button onClick={bookingf} className="order-now-button">BOOK</button>

          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/professional-cleaning-service-people-working-together-office_23-2150520596.jpg?t=st=1708641295~exp=1708644895~hmac=c1f488571a5eeae15033767ef378859197e07c2cea5c5f153397c8b4b5e857e9&w=996"
              alt="Cleaning"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CLEANING
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Welcome to our cleaning service, where we turn your space into a pristine sanctuary. Our dedicated team of professionals is committed to providing top-notch cleaning solutions tailored to your needs. Whether it's residential cleaning, office maintenance, or post-event cleanup, we've got you covered. With attention to detail and eco-friendly practices, we ensure a sparkling clean environment that promotes health and well-being. Say goodbye to the hassle of cleaning and hello to a fresh, organized space that you'll love coming home to or working in. Let us handle the dirty work so you can focus on what matters most.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
            BOOK
            </Button> */}
                        <button onClick={bookingf} className="order-now-button">BOOK</button>

          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?t=st=1708641491~exp=1708645091~hmac=e27641ed0983818f5f15e53ed854ddeca7b8b32b0deadd19bf6029a68e0b743c&w=996"
              alt="Transportation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                TRANSPORTATION
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Welcome to our transportation service, where getting from point A to point B is seamless and stress-free. Whether you need a ride to the airport, a corporate event, or a night out on the town, we've got you covered. Our fleet of vehicles is meticulously maintained, ensuring both safety and comfort throughout your journey. With professional and courteous drivers, you can trust us to get you to your destination on time, every time. From solo travelers to large groups, we offer tailored transportation solutions to meet your needs. Sit back, relax, and enjoy the ride with our reliable transportation service
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
            BOOK
            </Button> */}
                        <button onClick={bookingf} className="order-now-button">BOOK</button>

          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/elder-women-disinfecting-their-hands-while-home_23-2148492252.jpg?t=st=1708641651~exp=1708645251~hmac=72fea3184e6483da9d2b67ecba52bbc939c9ed378d7add865d4892e3b9602b88&w=996"
              alt="Mobility Assistance"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MOBILITY ASSISTANCE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Welcome to our mobility assistance service for elders, where we're dedicated to ensuring seniors maintain their independence and mobility with confidence and ease. Our experienced caregivers offer personalized support, helping seniors navigate their daily activities safely. From assisting with transfers and walking support to providing mobility aids and fall prevention measures, we're committed to enhancing seniors' quality of life. With compassion and respect, we empower elders to stay active and engaged in their communities while minimizing the risk of accidents or injuries.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              BOOK
            </Button> */}
                        <button onClick={bookingf} className="order-now-button">BOOK</button>

          </CardActions>
        </Card>
      </div>
      
      <Footer />
    </>
  );
};

export default Services;
