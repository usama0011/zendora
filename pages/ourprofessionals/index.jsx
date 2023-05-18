import React, { useState } from "react";
import styles from '../../styles/ourprofessionals.module.css'
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const Index = () => {
  const [professionalName, setProfessionalName] = useState("");
  const [selectedService, setSelectedService] = useState("all");
  const professionals = [
    {
      id: 1,
      name: "Ana",
      desc: "Each of our Professionals are licensed and insured. Take a look at our gallery and you'll be able to book an appointment with them directly. Not sure what service you're looking for? Click a professional and choose the consultation option to begin!",
      service: "spa",
    },
    {
      id: 2,
      name: "Smith",
      desc: "Each of our Professionals are licensed and insured. Take a look at our gallery and you'll be able to book an appointment with them directly. Not sure what service you're looking for? Click a professional and choose the consultation option to begin!",
      service: "salon",
    },
    {
      id: 3,
      name: "Elissa",
      desc: "Each of our Professionals are licensed and insured. Take a look at our gallery and you'll be able to book an appointment with them directly. Not sure what service you're looking for? Click a professional and choose the consultation option to begin!",
      service: "nail",
    },
    {
      id: 4,
      name: "Dlissa",
      desc: "Each of our Professionals are licensed and insured. Take a look at our gallery and you'll be able to book an appointment with them directly. Not sure what service you're looking for? Click a professional and choose the consultation option to begin!",
      service: "barber",
    },
    // Add more professionals here
  ];
  const handleSearch = (e) => {
    setProfessionalName(e.target.value);
    // Perform search logic here
  };

  const handleServiceSelect = (e) => {
    setSelectedService(e.target.value);
    // Perform service selection logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };
  const filteredProfessionals = professionals.filter((professional) => {
    if (selectedService === "all") {
      return professional.name.toLowerCase().includes(professionalName.toLowerCase());
    } else {
      return (
        professional.name.toLowerCase().includes(professionalName.toLowerCase()) &&
        professional.service === selectedService
      );
    }
  });
  return (
    <>
    <NavBar/>
    <div className={styles.container}>
    <div className={styles.upperContainer}>
    <div className={styles.bgImageContainer}>
               <Image src="/bg.png" alt='backgourndImage' fill/>
            </div>
      <div className={styles.ourprofessionalContainer}>
        <h1>Our Professionals</h1>
        <div className={styles.pre}>
          <span>Home</span>/<span> Our Professionals</span>
        </div>
      </div>
    </div>
    <div className={styles.bottomcontainer}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Each of our Professionals are licensed and insured. Take a look at our gallery and you will be able to book an appointment with them directly. Not sure what service you are looking for? Click a professional and choose the consultation option to begin!
        </p>
      </div>
      <div className={styles.salonContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.firstDiv}>
            <label htmlFor="pname">Search by Professional  Name</label>
            <input
              type="text"
              placeholder="Professional Name"
              value={professionalName}
              onChange={handleSearch}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.secondDiv}>
            <label htmlFor="service">Select Service</label>
            <select
              value={selectedService}
              onChange={handleServiceSelect}
              className={styles.serviceSelect}
            >
              <option value="all">Show All</option>
              <option value="massage">Massage</option>
              <option value="salon">Salon</option>
              <option value="nail">Nail</option>
              <option value="barber">Barber</option>
            </select>
          </div>

        </div>
        {filteredProfessionals.map((professional) => (
          <div className={styles.bookingContainer} key={professional.id}>
            <div className={styles.imageContainer}>
              <Image className={styles.myImage} src="/barber.png" alt="Professional Image" fill />
            </div>
            <div className={styles.formContainer}>
              <div className={styles.pName}>
                <p>{professional.name}</p>
                <span>{professional.service}</span>
              </div>
              <div className={styles.descContainer}>
                <p>{professional.desc}</p>
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Book An Appointment</h3>
                <div className={styles.inputItem}>
                  <input type="text" id="name" placeholder="Name" />
                  <input type="text" id="mobile" placeholder="Mobile Number" />
                </div>
                <div className={styles.inputItem}>
                  <input type="date" id="date" />
                  <input type="text" id="email" placeholder="Email" />
                </div>
                <div className={styles.chooseContainer}>
                  <select id="service">
                    <option value="massage">Massage</option>
                    <option value="salon">Salon</option>
                    <option value="nail">Nail</option>
                    <option value="barber">Barber</option>
                  </select>
                </div>
                <button  type="submit" className={styles.submitButton}>Send</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
};

export default Index;
