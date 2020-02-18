import styled from 'styled-components'

export const LandingContent = styled.div`
    color: whitesmoke;
    height: 30%;
    width: 80%;
    height: 70%;
    margin: auto;
    padding-top: 10%;
    a {
        color: whitesmoke;
        padding: 5%;
    }
    h1 {
   @media only screen and (max-width: 768px) {
      padding-top: 10%;
      }
      @media only screen and (max-width: 640px) {
        padding-top: 20%;
      }
}
`

export const Heading = styled.h2`
    font-size: 3.25rem;
    letter-spacing: 0.1em;
    color: black;
    margin: 5rem 0 -3rem 4rem;
    @media (max-width: 1024px) { 
        font-size: 2rem;
    color: black;
    margin: 2rem 0 -1.75rem 2rem;
    }
`

export const LightBackground = styled.div`
background-color: #E6BEBE;
width: 95%;
padding: 5% 0;
   margin: auto;
    margin-bottom: 5%;

    @media (min-width: 768px) {
    width: 98%;
    font-size: .7rem;

  }

  @media (min-width: 1024px) {
    width: 95%;
  
  }
`

export const ClearFix = styled.div`
:after {
   content: "";
   clear: both;
   display: table;
}
`

export const FloatLeft = styled.div`
    float: left;
   padding: 2% 2% 1% 0;
   width: 60%
`

export const FloatRight = styled.div`
float: right;
   padding: 2% 5% 5% 0;
   width: 30%;
`

export const Blurb = styled.div`
    padding: 2% 5%;
    text-align: center;
    p {
        padding-bottom: 3%;
    }
    h4 {
        font-weight: bold;
        font-style: oblique;

    }
`
export const DarkBackground = styled.div`
background-color: #00AAAA;
margin-bottom: 5%;
width: 95%;
padding: 5% 0;
   margin: auto;

   @media only screen and (max-width: 640px) {
      width: 98%;
      font-size: .7rem;
   }
`

export const Nav = styled.div`
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    font-size: 50px;
    color: white;
    text-align: right;
    ul {
        text-align: center;
    }
    @media (max-width: 1024px) { 
        width: 100%;
        height: 100%;
    }
`

export const NavItems = styled.div`
     @media (max-width: 1024px) {
        position: fixed;
        top: 50%;
        transform: translate(-50%,-50%);
        right: 0;
        text-align: center;
    
    }
`

export const CircleBg = styled.div`
position: fixed;
    top: 1rem;
    right: 1rem;
    background-color: #00AAAA;
    height: 3.25rem;
    width: 3.25rem;
    border-radius: 50%
`

export const Quarter = styled.div`
    position: fixed;
    top: -17.5rem;
    right: -17.5rem;
    background-color: #00AAAA;
    height: 35rem;
    width: 35rem;
    border-radius: 15%;
    z-index: 3;

    @media (max-width: 768px) {
    top: 0;
    right: 0;
     border-radius: 0;
     width: 100%;
     height: 100%;
    border: 0;

  }
`

export const PortfolioFlex = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
`

export const PortfolioItem = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.background});
    background-position:center;
	background-repeat:no-repeat;
	background-size:cover;
    transition: all .5s;

    h4 {
        font-size: 1.75rem;
        padding-top: 2.5rem;
        color: white;
        text-shadow: 2px 2px #333333;
    }

    .content {
        display: none;
     color: white; 
     padding: 5%;
     text-align: center;
     height: 100%;
     width: 80%;
        p {
            line-height: 1.5;
        }
    }

   .darkBg {
       height: 100%;
       width: 100%;
   }

    &:before {
    height: 100%;
    width: 100%;
     position: absolute;
     top: 0;
     left: 0;
     background-color: rgba(52, 73, 94, 0.75);
    }

    @media (max-width: 1024px) {
        .content {
            padding: 1%
            width: 90%
        }
        h4 {
            font-size: 1.5rem;
            padding-top: 1.5rem;
        }
    }
`

export const PortfolioParent = styled.div`
 width: 49%;
    height: 350px;
    overflow: hidden;
    position: relative;
    float: left;
    display: inline-block;
    cursor: pointer;
  :hover ${PortfolioItem},
  :focus ${PortfolioItem} {
    transform: scale(1.1);
  }

  :hover ${PortfolioItem}:before,
  :focus ${PortfolioItem}:before {
      display: block
  }

  :hover .content,
  :focus .content {
      display: block;
  }

  :hover .darkBg,
  :focus .darkBg {
    background-color: rgba(52,73, 94,0.75);
  } 

  @media (max-width: 1024px) {
      width: 100%;
  }
`

export const ContactButtons = styled.div`
    font-size: 50px;
    text-align: center;

    a {
        padding: 4% 2%;
    }
`