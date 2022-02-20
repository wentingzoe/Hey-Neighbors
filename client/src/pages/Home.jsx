import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Siderbar/Sidebar";
import EventMap from "../components/EventMap/EventMap";
import SidebarSearch from "../components/SideSearch/SidebarSearch";
import "./Home.css";
import axios from "axios";

function Home({ user, setUser }) {
  const [events, setEvents] = useState();

  useEffect(() => {
    axios
      .get("/api/events/incoming")
      .then((data) => {
        //console.log("events", data);
        setEvents([...data.data.events]);
      })
      .catch((err) => console.log(err));
  }, []);

  //console.log(events);

  return (
    <Grid container direction="row" justifyContent="space" alignItems="stretch">
      <Grid item xs={0} sm={1} md={1} lg={1}>
        <Sidebar user={user} setUser={setUser} />
      </Grid>
      <Grid item xs={0} sm={11} md={11} lg={3}>
        <SidebarSearch user={user} events={events} setEvents={setEvents} />
        {/* <SearchBar /> */}
      </Grid>

      <Grid
        item
        xs={12}
        sm={11}
        md={11}
        lg={8}
        className="event_map"
        style={{ backgroundColor: "#F6F6FA" }}
      >
        <div className="container js-container">
          <div className="container__head">
            <div className="container__title title title_xl">Events </div>

            {/* search*/}
            <div className="container__search search">
              <button className="search__action action">
                <i className="la la-search " />
              </button>
            </div>
            {/* new*/}
            <div className="container__new new ">
              <button className="new__action action">
                <i className="la la-plus-circle " />
              </button>
            </div>
          </div>
          <div className="container__body">
            {events && <EventMap events={events} />}
          </div>
        </div>
      </Grid>
    </Grid>
    // <>
    //   <Grid
    //     container
    //     direction="row"
    //     justifyContent="space-between"
    //     alignItems="stretch"
    //   >
    //     <Grid itemxs={12} sm={4}>
    //       <div className="sidebar sidebar_info sidebar_menu">
    //         <Sidebar user={user} setUser={setUser} />
    //         <SidebarSearch user={user} setEvents={setEvents} />
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} sm={8}>
    //       <div className="container">
    //         <div className="container__head">
    //           <div className="container__title title title_xl">Events </div>

    //           {/* search*/}
    //           <div className="container__search search">
    //             <button className="search__action action">
    //               <i className="la la-search " />
    //             </button>
    //           </div>
    //           {/* new*/}
    //           <div className="container__new new ">
    //             <button className="new__action action">
    //               <i className="la la-plus-circle " />
    //             </button>
    //           </div>
    //         </div>
    //         <div className="container__body">
    //           {events && <EventMap events={events} />}
    //         </div>
    //       </div>
    //     </Grid>
    //   </Grid>
    // </>
  );
}

export default Home;
