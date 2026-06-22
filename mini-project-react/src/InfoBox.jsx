
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

   const COLD_URL="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";

   const HOT_URL="https://images.unsplash.com/photo-1572246538688-3f326dca3951?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwc3VtbWVyfGVufDB8fDB8fHww";

   const RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    return (
        <div className="InfoBox">
            
            <div className="Card">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL :info.temp>15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}&deg;C</p>
            <p>Min Temp={info.tempMin}&dec;C</p>
            <p>Max Temp={info.tempMax}&dec;C</p>
            <p>
                The weather can be describe as {info.weather} and feels like {info.feelslike}&deg;C
            </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}