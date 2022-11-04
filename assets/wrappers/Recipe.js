import styled from "styled-components";

const Wrappers = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=poppins&display=swap");

  body {
    font-family: "poppins";
    background-color: #fafafa;
  }

  .Nutrition {
    background-image: url("./nutritionBg.svg");

    /* display: block; */
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 30vh;
    width: 100%;
    opacity: 1px;
    margin-bottom: 50px;
  }

  .cover1 {
    opacity: 0.25;
  }

  .Nutrition h3 {
    /* position: relative;
    text-align: center;
    padding-top: 194px; */
    font-size: 60px;
    font-weight: 300;
    display: block;
    text-align: center;
    font-family: bite-chocolate;
    color: var(--font-color);
    margin-top: 2rem;
  }

  .searchbar input {
    border: 2px solid grey;

    border-radius: 20px;
    margin-left: 65px;
    width: 450px;
    height: 42px;
    /* background-color: red; */
    font-size: 24px;
  }

  .searchbar input::placeholder {
    font-size: 20px;
    padding-left: 20px;
    color: #e0e0e0;
  }
  .search-icon {
    margin-left: 29rem;
    margin-bottom: -3rem;
  }
  /* 
div i {
  background-color: red;
  width: 100px;
  margin-top: 20px;
} */

  /* .fa-search {
  width: 100px;
  margin-top: 20px;
} */

  .searchbar i {
    position: absolute;
    width: 100px;
    margin-top: 25px;
  }

  .icon {
    padding: 10;
    padding-left: 435px;
    padding-top: 1px;
    color: #787878;
    min-width: 50px;
    text-align: center;
    justify-items: center;
  }

  .searchrec {
    position: absolute;
    border-left: 2px solid #b2b2b2;
    height: 26px;
    /* width: 100%; */
    max-width: 50px;
    padding: 7px;
    margin-top: 0.5rem;
    margin-left: 450px;
  }

  .search-bar {
    width: 150px;
    height: 50px;
    background-color: yellow;
    border-radius: 50px;
    margin-left: 10%;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px white;
    /* padding-top: 10px; */
    justify-content: space-between;
    color: green;
    font-weight: 200;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    outline: none;
  }
  .button {
    width: 10% !important;
    height: 20%;
    background-color: yellow;
    box-shadow: 1px 1px solid black;
    color: green;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    border: 2px white !important;
  }
  .fruitgrid {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 250px 250px 250px 250px;
    margin-top: 50px;
    /* margin-left: 50px; */
    justify-content: space-evenly;
    grid-auto-flow: row;
  }

  .fruitgrid .category ul {
    text-align: left;
    padding-left: 0;
    color: #414141;
  }
  .fruitgrid .category p {
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;

    font-size: 28;
    font-weight: 1000;
    color: #458100;
    margin-top: 0px;
  }
  .fruitgrid .category .line {
    position: relative;
    border: 1px solid #b2b2b2;
    border-radius: 2px;
  }
  .fruitimg {
    width: 245px;
    height: 200px;
    border: 2px solid #707070;
  }

  /* .fruitgrid div {
   border: 1px solid red; 
} */

  .fruitgrid div p {
    /* border: 1px solid blue; */
    text-align: center;
  }

  .category ul {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    body {
      font-family: "poppins";
      background-color: #fafafa;
    }

    .searchbar input {
      border: 2px solid grey;
      display: inline-block;
      border-radius: 20px;
      margin-left: 18px;
      width: 50%;
      height: 42px;
      /* background-color: red; */
      font-size: 24px;
    }

    .searchrec {
      /* position: absolute; */
      border-left: 2px solid #b2b2b2;
      height: 3.5%;
      /* width: 100%; */
      max-width: 50px;
      padding: 7px;
      margin-top: 2%;
      margin-left: 42%;
    }

    .button {
      display: inline-block;
      width: 25% !important;
    }

    .icon {
      padding: 10;
      padding-left: 200px;
      padding-top: 1px;
      color: #787878;
      min-width: 50px;
      text-align: center;
      justify-items: center;
    }

    .search-icon {
      margin-left: 44%;
      margin-bottom: -3rem;
      position: absolute;
    }
    .fruitgrid {
      display: grid;
      grid-template-columns: 250px;
      margin-top: 50px;
      /* margin-left: 50px; */
      justify-content: space-evenly;
    }
  }
`;

export default Wrappers;
