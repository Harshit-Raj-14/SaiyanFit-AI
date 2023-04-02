import Head from "next/head";
import Image from "next/image";
import buildLogo from "../assets/eklavya-logo.png";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [ailments, setAilments] = useState("");
  const [country, setCountry] = useState("");
  const [preference, setPreference] = useState("");

  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInput,
        name,
        weight,
        age,
        height,
        ailments,
        country,
        preference,
      }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  const onNameChanged = (event) => {
    setName(event.target.value);
  };

  const onWeightChanged = (event) => {
    setWeight(event.target.value);
  };

  const onAgeChanged = (event) => {
    setAge(event.target.value);
  };

  const onheightChanged = (event) => {
    setHeight(event.target.value);
  };

  const oncountryChanged = (event) => {
    setCountry(event.target.value);
  };

  const onailmentsChanged = (event) => {
    setAilments(event.target.value);
  };

  const onpreferenceChanged = (event) => {
    setPreference(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>SaiyanFit AI | Eklavya</title>
      </Head>

      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>SaiyanFit AI</h1>
            <h3>Your Personal Fitness Trainer & Dietitian</h3>
          </div>

          <div className="header-subtitle">
            <h2>
              <strong>Goku</strong> is here to make sure you are{" "}
              <strong>fit and healthy</strong> to unleash your{" "}
              <strong>Super Saiyan Mode</strong> now.
            </h2>
          </div>
        </div>
        {/*   FORM   */}

        <div className="prompt-container-name">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="prompt-box-name"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={onNameChanged}
            />
          </div>
        </div>
        <div className="prompt-container-age">
          <div>
            <label htmlFor="age">Age:</label>
            <input
              className="prompt-box"
              type="text"
              id="age"
              placeholder="Enter your age (in years)"
              value={age}
              onChange={onAgeChanged}
            />
          </div>
        </div>
        <div className="prompt-container-weight">
          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              className="prompt-box"
              type="text"
              id="weight"
              placeholder="Enter your weight (in kg)"
              value={weight}
              onChange={onWeightChanged}
            />
          </div>
        </div>
        <div className="prompt-container-height">
          <div>
            <label htmlFor="height">Height:</label>
            <input
              className="prompt-box"
              type="text"
              id="height"
              placeholder="Enter your height (in cm)"
              value={height}
              onChange={onheightChanged}
            />
          </div>
        </div>
        <div className="prompt-container-ailments">
          <div>
            <label htmlFor="ailments">Ailments:</label>
            <input
              className="prompt-box"
              type="text"
              id="ailments"
              placeholder="Enter your disease or allergy"
              value={ailments}
              onChange={onailmentsChanged}
            />
          </div>
        </div>
        <div className="prompt-container-country">
          <div>
            <label htmlFor="country">Country:</label>
            <input
              className="prompt-box"
              type="text"
              id="country"
              placeholder="Enter your country"
              value={country}
              onChange={oncountryChanged}
            />
          </div>
        </div>
        <div className="prompt-container-preferences">
          <div>
            <label htmlFor="preference">Preference:</label>
            <input
              className="prompt-box"
              type="text"
              id="preference"
              placeholder="Veg / Non-Veg"
              value={preference}
              onChange={onpreferenceChanged}
            />
          </div>
        </div>
        <div className="prompt-container-myHealthGoals">
          <div>
            <label htmlFor="user-input">My Health Goals:</label>
            <input
              className="prompt-box2"
              id="user-input"
              placeholder="e.g. I want to lose 2kg"
              value={userInput}
              onChange={onUserChangedText}
            />
          </div>
        </div>
        <div className="prompt-container">
          <br></br>
          <br></br>
          <div className="prompt-buttons">
            <a
              className={
                isGenerating ? "generate-button loading" : "generate-button"
              }
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? (
                  <span className="loader"></span>
                ) : (
                  <p>Get your Plan</p>
                )}
              </div>
            </a>
          </div>
        </div>

        {/* FORM ENDS */}

        {/* API OUTPUT PLAN */}
       
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Here's your Happy Meal!</h3>
                </div>
              </div>
              <div className="output-content">
                <textarea>{apiOutput}</textarea>
              </div>
            </div>
          )}
        

        {/* LOGO */}
        <div className="badge-container grow">
          <a
            href="https://github.com/Harshit-Raj-14/SaiyanFit-AI"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge">
              <Image src={buildLogo} alt="Eklavya logo" />
              <p>built by Team Eklavya</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
