import React, { useState } from "react";
import "./styles.css";

var dataBase = {
  Hill_Station: [
    {
      place: "Ooty",
      bestTimeVisit: "October-June",
      img:
        "https://cdn1.tripoto.com/media/filter/tst/img/1429685/Image/1575630932_3_1.jpg"
    },
    {
      place: "	Manali",
      bestTimeVisit: "March - June",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Manali_jan.jpg/800px-Manali_jan.jpg"
    }
  ],
  Beaches: [
    {
      place: "Goa",
      bestTimeVisit: "November to February",
      img:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1100&h=600&s=1"
    },
    {
      place: "Radhanagar Beach",
      bestTimeVisit: "December to February",
      img:
        "https://www.holidify.com/images/cmsuploads/compressed/RadhanagarBeach_20190520152048_20190520152129.jpg"
    }
  ],
  Temples: [
    {
      place: "Kamakhya Temple",
      bestTimeVisit: "january to march",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehdZKAIiaqTrwjuLaG7P6dmCZSRSUad4JTA&usqp=CAU"
    },
    {
      place: "Somnath",
      bestTimeVisit: "March to April",
      img:
        "https://static.toiimg.com/photo/msid-46918897,width-96,height-65.cms"
    }
  ],
  Forts: [
    {
      place: "Bhangad",
      bestTimeVisit: "Most probably Night 😅",
      img:
        "https://www.ramadaneemrana.com/wp-content/uploads/2015/07/Must-see-Places-Bhangarh-from-neemrana.jpg"
    },
    {
      place: "Raigad",
      bestTimeVisit: "early morning is best time",
      img:
        "https://www.smallstepsadventures.com/blog/wp-content/uploads/2018/03/raigad-fort.jpg"
    }
  ]
};

export default function App() {
  var [place, setPlace] = useState("Hill_Station");

  function clickInputHandler(placeToVisit) {
    //console.log(place);
    place = placeToVisit;
    setPlace(place);
    var color = "blue";
  }

  return (
    <div className="App">
      <h1 style={{ marginLeft: "1rem", textDecoration: "underline" }}>
        Tourist Places to visit in INDIA
      </h1>
      <h4>My Recommendations</h4>
      {Object.keys(dataBase).map((placeToVisit) => {
        return (
          <button
            onClick={() => clickInputHandler(placeToVisit)}
            key={placeToVisit}
          >
            {placeToVisit}
          </button>
        );
      })}
      {/* {place} */}
      {dataBase[place].map((data) => {
        //console.log(data);

        return (
          <ul
            style={{
              listStyle: "none",
              padding: "1rem",
              margin: "auto"
            }}
          >
            <li
              style={{
                border: "1px solid black",
                borderRadius: "0.5rem",
                padding: "2rem",
                textAlign: "right"
              }}
            >
              <div className="img-div">
                <img
                  src={data.img}
                  style={{ width: "220px", height: "19vh" }}
                ></img>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      padding: "0.5rem",
                      fontSize: "larger",
                      fontWeight: "bold"
                    }}
                  >
                    {data.place}
                  </div>
                  <div style={{ padding: "0.5rem", fontSize: "larger" }}>
                    Best time To visit :{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {data.bestTimeVisit}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

