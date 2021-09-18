import "./ComposePost.css";
import { Avatar, Button } from "@material-ui/core";
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const Main = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: 400,
  };


  const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [search, setSearch] = React.useState("");
  let [gifs, setGifs] = React.useState([]);
  let [loadingState, setLoadingState] = React.useState(false);

  let searchGif = () => {
    if (search.length > 0) {
      setLoadingState(true);
      fetch(GIPHY_API + search)
        .then((res) => {
          setLoadingState(false);
          return res.json();
        })
        .then((result) => {
          console.log(result);
          setGifs(result.data.map((gif) => {
            return gif.images.fixed_height.url;
          }))
        })
        .catch(() => {
          alert("Something went wrong");
          setLoadingState(false);
        })
    }
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />

          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>

        {/* //Imoji Show Here */}
        <div className="imojiInsert">



        </div>


        <Button
          type="#"
          className="tweetBox__tweetButton"
        >
          Tag Fiends
        </Button>
        <Button
          type="#"
          className="tweetBox__tweetButton"
        >
          Check In
        </Button>
        <br />
        <div>
          <Button className="tweetBox__tweetButton" onClick={handleOpen}>Gif</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Search Gif
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="Scroll">
                  <div className="header">
                    <div>
                      <input
                        type="text"
                        placeholder="Search GIF"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button onClick={searchGif}>
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="result">
                    {
                      (loadingState) ? (
                        <div className="loading">
                          <div className="loader">
                          </div>
                        </div>
                      ) : (
                        <div className="list">
                          {
                            gifs.map((gif) => {
                              return (
                                <div className="item">
                                  <img alt="" src={gif} />
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    }
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
        <Button
          type="#"
          className="tweetBox__tweetButton">
          Tag Event
        </Button>
      </form>
    </div>
  );
}

export default Main;