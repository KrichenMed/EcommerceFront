import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const CategoriesList = () => {
  // Your string of categories
  const categoriesString = `Beading & Jewelry Making
Fabric Decorating
Knitting & Crochet Supplies
Printmaking Supplies
Scrapbooking & Stamping Supplies
Sewing Products
Craft & Hobby Fabric
Needlework Supplies
Arts, Crafts & Sewing Storage
Painting, Drawing & Art Supplies
Craft Supplies & Materials
Gift Wrapping Supplies
Party Decorations
Automotive Paint & Paint Supplies
Heavy Duty & Commercial Vehicle Equipment
Automotive Tires & Wheels
Automotive Tools & Equipment
Automotive Performance Parts & Accessories
Car Care
Oils & Fluids
Automotive Replacement Parts
Lights, Bulbs & Indicators
Automotive Interior Accessories
Automotive Exterior Accessories
Automotive Enthusiast Merchandise
Car Electronics & Accessories
RV Parts & Accessories
Motorcycle & Powersports
Baby Diapering Products
Baby & Toddler Feeding Supplies
Pregnancy & Maternity Products
Child Safety Car Seats & Accessories
Baby Safety Products
Toilet Training Products
Baby Care Products
Baby Travel Gear
Baby Activity & Entertainment Products
Baby Gifts
Baby Stationery
Nursery Furniture, Bedding & DÃ©cor
Baby
Baby Boys' Clothing & Shoes
Baby Strollers & Accessories
Beauty & Personal Care
Perfumes & Fragrances
Hair Care Products
Makeup
Skin Care Products
Beauty Tools & Accessories
Foot, Hand & Nail Care Products
Personal Care Products
Shaving & Hair Removal Products
Computer Servers
Data Storage
Computer Monitors
Computers & Tablets
Tablet Replacement Parts
Computer Networking
Computer Components
Tablet Accessories
Laptop Accessories
Computer External Components
Wearable Technology
Televisions & Video Products
GPS & Navigation
Headphones & Earbuds
Office Electronics
Portable Audio & Video
eBook Readers & Accessories
Cell Phones & Accessories
Accessories & Supplies
Video Projectors
Vehicle Electronics
Camera & Photo
Security & Surveillance Equipment
Computers
Home Audio & Theater Products
Video Game Consoles & Accessories
Boys' Clothing
Boys' Accessories
Boys' Jewelry
Boys' Watches
Boys' Shoes
Girls' Clothing
Girls' Accessories
Girls' Jewelry
Girls' Watches
Girls' Shoes
Girls' School Uniforms
Travel Duffel Bags
Messenger Bags
Travel Tote Bags
Garment Bags
Luggage Sets
Suitcases
Travel Accessories
Rain Umbrellas
Backpacks
Luggage
Laptop Bags
Men's Clothing
Men's Accessories
Men's Watches
Men's Shoes
Women's Clothing
Women's Handbags
Women's Accessories
Women's Watches
Women's Shoes
Women's Jewelry
Kids' Furniture
Gift Cards
Oral Care Products
Vision Products
Wellness & Relaxation Products
Baby & Child Care Products
Household Supplies
Health Care Products
Diet & Sports Nutrition
Home Use Medical Supplies & Equipment
Sexual Wellness Products
Health & Household
Sports Nutrition Products
Stationery & Gift Wrapping Supplies
Commercial Door Products
Power Transmission Products
Industrial Materials
Industrial Hardware
Abrasive & Finishing Products
Industrial Adhesives, Sealants & Lubricants
Material Handling Products
Test, Measure & Inspect
Industrial Power & Hand Tools
Hydraulics, Pneumatics & Plumbing
Filtration
Electronic Components
Lab & Scientific Products
Janitorial & Sanitation Supplies
Occupational Health & Safety Products
Cutting Tools
Fasteners
Science Education Supplies
Food Service Equipment & Supplies
Additive Manufacturing Products
Professional Medical Supplies
Professional Dental Supplies
Packaging & Shipping Supplies
Retail Store Fixtures & Equipment
Industrial & Scientific
Bath Products
Bedding
Home DÃ©cor Products
Furniture
Household Cleaning Supplies
Seasonal DÃ©cor
Home Lighting & Ceiling Fans
Kitchen & Dining
Heating, Cooling & Air Quality
Kids' Home Store
Home Storage & Organization
Wall Art
Vacuum Cleaners & Floor Care
Ironing Products
Party Supplies
Pet Bird Supplies
Cat Supplies
Dog Supplies
Fish & Aquatic Pets
Horse Supplies
Reptiles & Amphibian Supplies
Small Animal Supplies
Smart Home: New Smart Devices
Smart Home: Voice Assistants and Hubs
Smart Home: Smart Locks and Entry
Smart Home: Home Entertainment
Smart Home: WiFi and Networking
Smart Home: Security Cameras and Systems
Smart Home: Lighting
Smart Home: Plugs and Outlets
Smart Home: Vacuums and Mops
Smart Home Thermostats - Compatibility Checker
Smart Home: Lawn and Garden
Smart Home: Other Solutions
Smart Home - Heating & Cooling
Sports & Fitness
Outdoor Recreation
Sports & Outdoors
Home Appliances
Pumps & Plumbing Equipment
Paint, Wall Treatments & Supplies
Safety & Security
Light Bulbs
Power Tools & Hand Tools
Kitchen & Bath Fixtures
Lighting & Ceiling Fans
Electrical Equipment
Hardware
Building Supplies
Measuring & Layout
Welding & Soldering
Tools & Home Improvement
Kids' Party Supplies
Toy Figures & Playsets
Novelty Toys & Amusements
Arts & Crafts Supplies
Building Toys
Dolls & Accessories
Kids' Electronics
Games & Accessories
Learning & Education Toys
Kids' Dress Up & Pretend Play
Puppets & Puppet Theaters
Puzzles
Sports & Outdoor Play Toys
Stuffed Animals & Plush Toys
Baby & Toddler Toys
Tricycles, Scooters & Wagons
Finger Toys
Toy Vehicle Playsets
Kids' Play Trains & Trams
Kids' Play Trucks
Kids' Play Cars & Race Cars
Kids' Play Boats
Kids' Play Buses
Kids' Play Tractors
Slot Cars, Race Tracks & Accessories
Sony PSP Games, Consoles & Accessories
Nintendo DS Games, Consoles & Accessories
PlayStation 3 Games, Consoles & Accessories
Wii Games, Consoles & Accessories
Xbox 360 Games, Consoles & Accessories
Mac Games & Accessories
Nintendo 3DS & 2DS Consoles, Games & Accessories
Legacy Systems
PlayStation Vita Games, Consoles & Accessories
Wii U Games, Consoles & Accessories
PlayStation 4 Games, Consoles & Accessories
Xbox One Games, Consoles & Accessories
Video Games
Online Video Game Services
Virtual Reality Hardware & Accessories
Nintendo Switch Consoles, Games & Accessories
PlayStation 5 Consoles, Games & Accessories
Xbox Series X & S Consoles, Games & Accessories
PC Games & Accessories
Baby Girls' Clothing & Shoes
Boys' School Uniforms
Toys & Games
`;
  //Departments
  const departments = [
    "All departments",
    "Art & Crafts",
    "Automotive",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "Boys Fashion",
    "Men's Fashion",
    "Women's Fashion",
    "Electronics",
    "Music",
    "Movies & TV's",
    "Computers",
    "Smart Home",
    "Health and Household",
    "Industrial and scientific",
    "Luggage",
    "Pet Supplies",
    "Software",
    "Sports and Outdoors",
    "Tools & Home Improvement",
    "Video Games",
  ];
  // Split the string into an array of lines
  const categories = categoriesString.split("\n");
//{
 // categories.map((category, index) => (
    // Render each category as an <h6> element
   // <Button
     // variant="light"
     // size="lg"
     // style={{ width: "100%", borderRadius: "0px", textAlign: "left" }}
    //>
     // <Link to={"/register"} className="nav-link">
      //  <h6 key={index}>
       //   <b>{category}</b>
       // </h6>
     // </Link>
   // </Button>
 // ));
//}
  return (
    <div>
      {categories.map((departments, index) => (
        // Render each category as an <h6> element
        <Link key={index} to={`/department/${departments}`} className="nav-link">
          <Button
            variant="light"
            size="lg"
            style={{
              width: "100%",
              borderRadius: "0px",
              textAlign: "left",
              position: "relative", // Add position relative to the button
            }}
          >
            <h6 key={index} style={{ marginRight: "20px" }}>
              <b>{departments}</b>
            </h6>

            <span
              style={{
                position: "absolute", // Set position absolute to position the arrow
                right: "10px", // Adjust the right distance as needed
                top: "50%", // Align the arrow vertically
                transform: "translateY(-50%)", // Center the arrow vertically
              }}
            >
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
