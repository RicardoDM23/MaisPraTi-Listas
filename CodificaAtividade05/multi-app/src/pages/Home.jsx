import React, { useState } from "react";

import AppContainer from "../components/Home/AppContainer";
import MainContent from "../components/Home/MainContent";
import CarouselContainer from "../components/Home/CarouselContainer";
import NavBar from "../components/Home/NavBar";
import NavBarToggle from "../components/Home/NavBarToggle";
import StyledLink from "../components/Home/StyledLink";
import Footer from "../components/Home/Footer";
import CarouselItem from "../components/Home/CarouselItem";
import ReturnButton from "../components/Home/ReturnButton";
import CustomCarousel from "../components/Home/CustomCarousel";

import { renderComponent } from "../utils/renderComponent";
import useAuthentication from "../hooks/useAuthentication";
import Login from "../components/Login/Login";
import { FaBars, FaQrcode, FaNetworkWired, FaSearch, FaTasks, FaRegQuestionCircle, FaGlobeAmericas, FaArrowLeft } from "react-icons/fa";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useAuthentication(isAuthenticated);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

  const handleReturn = () => {
    setCurrentComponent(null);
  };

  return (
    <AppContainer>
      <NavBarToggle onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={handleLogin} />
        </MainContent>
      ) : (
        <>
          <NavBar isOpen={isNavBarOpen}>
            <StyledLink onClick={() => handleAccess(0, "QRCodeGenerator")}>
              <FaQrcode />
              QR Code Generator
            </StyledLink>
            <StyledLink onClick={() => handleAccess(1, "IPAddressFinder")}>
              <FaNetworkWired />
              IP Address Finder
            </StyledLink>
            <StyledLink onClick={() => handleAccess(2, "MovieSearchEngine")}>
              <FaSearch />
              Movie Search
            </StyledLink>
            <StyledLink onClick={() => handleAccess(3, "TodoApp")}>
              <FaTasks />
              Todo App
            </StyledLink>
            <StyledLink onClick={() => handleAccess(4, "QuizApp")}>
              <FaRegQuestionCircle />
              Quiz App
            </StyledLink>
            <StyledLink onClick={() => handleAccess(5, "LanguageTranslator")}>
              <FaGlobeAmericas />
              Translator
            </StyledLink>
            <button
              onClick={handleLogout}
              style={{
                marginTop: "20px",
                color: "white",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Logout
            </button>
          </NavBar>
          <MainContent>
            {currentComponent ? (
              <>
                {renderComponent(currentComponent)}
                <ReturnButton onClick={handleReturn}>
                  <FaArrowLeft /> Return
                </ReturnButton>
              </>
            ) : (
              <CarouselContainer>
                <CustomCarousel
                  showArrows={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  selectedItem={carouselIndex}
                  onChange={(index) => setCarouselIndex(index)}
                >
                  <CarouselItem>
                    <h2>QR Code Generator</h2>
                    <button onClick={() => handleAccess(0, "QRCodeGenerator")}>
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>IP Address Finder</h2>
                    <button onClick={() => handleAccess(1, "IPAddressFinder")}>
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>Movie Search Engine</h2>
                    <button
                      onClick={() => handleAccess(2, "MovieSearchEngine")}
                    >
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>Todo App</h2>
                    <button onClick={() => handleAccess(3, "TodoApp")}>
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>Quiz App</h2>
                    <button onClick={() => handleAccess(4, "QuizApp")}>
                      Acessar
                    </button>
                  </CarouselItem>
                  <CarouselItem>
                    <h2>Language Translator</h2>
                    <button
                      onClick={() => handleAccess(5, "LanguageTranslator")}
                    >
                      Acessar
                    </button>
                  </CarouselItem>
                </CustomCarousel>
              </CarouselContainer>
            )}
            <Footer>© 2024 Your Company | All rights reserved</Footer>
          </MainContent>
        </>
      )}
    </AppContainer>
  );
};

export default Home;
