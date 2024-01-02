
import { useContext } from "react";
import "./NavBar.css";
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import * as React from 'react';
import RecommendIcon from '@mui/icons-material/Recommend';
import { MyCurrentCoinContext } from "./App";
import { fromShekelToDollar, timePast } from "./helper";

const DonationItem = ({ c }) => {

    let coin = useContext(MyCurrentCoinContext);

    return (
        <>
            <div className="donationItem">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 110 }}
                        image="https://www.patients-rights.org/webfiles/images/cache/220X220/zcX1/webfiles/associations/c076f16d86214b1d9a73c6cedacf8e47.jpg"
                        title="ezer miziyon "
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {c.name}
                        </Typography>
                        <Typography variant="h3" color="text.secondary">
                            {c.sum}
                            {/* { coin.d ? fromShekelToDollar(c.sum,coin.cd) : c.sum }
                            {coin.d ? "דולרים" : "שקלים"} */}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {c.delection}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {timePast(c.date)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" startIcon={< RecommendIcon />}>
                            Like
                        </Button>
                        <a href="https://www.ami.org.il/" target="_blank">אתר עזר מציון</a>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}

export default DonationItem;

{/* <div className="oneContributione"> */ }
{/* <h5>{c.id}</h5>  */ }
{/* <h1 className="name">{c.name}</h1>
                <h3 className="sum">{c.sum}</h3>
                <h3 className="delection">{c.delection}</h3> */}
{/* <h3>{c.diffDays()}</h3> */ }
{/* </div> */ }
