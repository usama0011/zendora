import React, { useState } from 'react';
import styles from '../../styles/Initial.module.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Index = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [receiveTextMessages, setReceiveTextMessages] = useState(false);
  const [services, setServices] = useState('');
  const [industryExperience, setIndustryExperience] = useState('');
  const [licenseInfo, setLicenseInfo] = useState({
    licenseDate: '',
    isLicenseValid: false,
    licenseNumber: '',
  });
  const [leaseTiming, setLeaseTiming] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address && email && telephone && services && industryExperience && leaseTiming && hearAboutUs) {
      // Handle form submission logic here
      setFormError(false);
      console.log('Form submitted!');
    } else {
      setFormError(true);
    }
  };

  return (
      <>
      <NavBar/>
    <div className={styles.container}>
      <h1 className={styles.mytitle}>Zendora Salons</h1>
      <form className={styles.myForm} onSubmit={handleSubmit}>
        <div className={styles.form_row}>
          <div className={styles.form_field}>
            <label className={styles.formLabel}>Name:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className={styles.form_field}>
            <label className={styles.formLabel}>Address:</label>
            <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_field}>
            <label className={styles.formLabel}>Email Address:</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.form_field}>
            <label className={styles.formLabel}>Preferred Telephone Number:</label>
            <input
              type="number"
              name="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.form_fields}>
          <label className={styles.formLabel}>Can you receive text messages?</label>
          <input
            type="checkbox"
            name="receiveTextMessages"
            checked={receiveTextMessages}
            onChange={(e) => setReceiveTextMessages(e.target.checked)}
          />
        </div>
        <div className={styles.form_fiel}>
          <label className={styles.formLabel}>Types of Services you provide:</label>
          <textarea className={styles.mytextArea} name="services" value={services} onChange={(e) => setServices(e.target.value)} required></textarea>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_field}>
            <label className={styles.formLabel}>How long have you been in your industry?</label>
            <input
              type="number"
              name="industryExperience"
              value={industryExperience}
              onChange={(e) => setIndustryExperience(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_field}>
            <label className={styles.formLabel}>When did you get your license?</label>
            <input
              type="date"
              name="licenseDate"
              value={licenseInfo.licenseDate}
              onChange={(e) => setLicenseInfo({ ...licenseInfo, licenseDate: e.target.value })}
              required
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_fields}>
            <label className={styles.formLabel}>Is your license currently valid?</label>
            <input
              type="checkbox"
              name="isLicenseValid"
              checked={licenseInfo.isLicenseValid}
              onChange={(e) => setLicenseInfo({ ...licenseInfo, isLicenseValid: e.target.checked })}
            />
          </div>
          <div className={styles.form_field}>
            <label className={styles.formLabel}>License number:</label>
            <input
              type="text"
              name="licenseNumber"
              value={licenseInfo.licenseNumber}
              onChange={(e) => setLicenseInfo({ ...licenseInfo, licenseNumber: e.target.value })}
              required
            />
          </div>
        </div>
        <div className={styles.form_field}>
          <label className={styles.formLabel}>How soon would you like to begin leasing a suite from us?</label>
          <input
            type="text"
            name="leaseTiming"
            value={leaseTiming}
            onChange={(e) => setLeaseTiming(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_field}>
          <label className={styles.formLabel}>How did you hear about us?</label>
          <input
            type="text"
            name="hearAboutUs"
            value={hearAboutUs}
            onChange={(e) => setHearAboutUs(e.target.value)}
            required
          />
        </div>
        {formError && <p className={styles.error_message}>Please fill in all required fields.</p>}
        <button className={styles.mybtn} type="submit" disabled={!name || !address || !email || !telephone || !services || !industryExperience || !leaseTiming || !hearAboutUs}>
          Submit
        </button>
      </form>
    </div>
    <Footer/>
      </>
  );
};

export default Index;
