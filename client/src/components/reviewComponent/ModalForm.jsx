import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ModalForm = (props) => {
  const [starRating, setStarRating] = useState(0)
  const [recommend, setRecommend] = useState('')
  const [checked, setChecked] = useState('')
  const [YNchecked, setYNChecked] = useState('')

  // characteristics
  const [charSize, setCharSize] = useState('')
  const [charWidth, setCharWidth] = useState('')
  const [charComfort, setCharComfort] = useState('')
  const [charQuality, setCharQuality] = useState('')
  const [charLength, setCharLength] = useState('')
  const [charFit, setCharFit] = useState('')
  const [sizeChecked, setSizeChecked] = useState('')
  const [widthChecked, setWidthChecked] = useState('')
  const [comfortChecked, setComfortChecked] = useState('')
  const [qualityChecked, setQualityChecked] = useState('')
  const [lengthChecked, setLengthChecked] = useState('')
  const [fitChecked, setFitChecked] = useState('')

  // summary
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [count, setCount] = useState(60)
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')

  // final form
  const [error, setError] = useState('')
  const [clicked, setClicked] = useState(false)
  const [form, setForm] = useState({})

  // images
  const [images, setImages] = useState([])
  const [data, setData] = useState({})
  var charObj = {}

  useEffect(() => {
    if (props.ids.Comfort) {
      if(!charObj[props.ids.Comfort.id]) {
        charObj[props.ids.Comfort.id] = charComfort
      } else {
        charObj[props.ids.Comfort.id] = charComfort
      }
      form.characteristics = charObj
    }
  }, [charComfort])

  useEffect(() => {
    if (props.ids.Size) {
      if(!charObj[props.ids.Size.id]) {
        charObj[props.ids.Size.id] = charSize
      } else {
        charObj[props.ids.Size.id] = charSize
      }
      form.characteristics = charObj
    }
  }, [charSize])

  useEffect(() => {
    if (props.ids.Width) {
      if(!charObj[props.ids.Width.id]) {
        charObj[props.ids.Width.id] = charWidth
      } else {
        charObj[props.ids.Width.id] = charWidth
      }
      form.characteristics = charObj
    }
  }, [charWidth])

  useEffect(() => {
    if (props.ids.Quality) {
      if(!charObj[props.ids.Quality.id]) {
        charObj[props.ids.Quality.id] = charQuality
      } else {
        charObj[props.ids.Quality.id] = charQuality
      }
      form.characteristics = charObj
    }
  }, [charQuality])

  useEffect(() => {
    if (props.ids.Length) {
      if(!charObj[props.ids.Length.id]) {
        charObj[props.ids.Length.id] = charLength
      } else {
        charObj[props.ids.Length.id] = charLength
      }
      form.characteristics = charObj
    }
  }, [charLength])

   useEffect(() => {
    if (props.ids.Fit) {
      if(!charObj[props.ids.Fit.id]) {
        charObj[props.ids.Fit.id] = charFit
      } else {
        charObj[props.ids.Fit.id] = charFit
      }
      form.characteristics = charObj
    }
  }, [charFit])


  const submitReviews = () => {
    // axios.post('api/reviews/', form)
    // .then(() => {props.close()})
    // .catch(err => console.log(err))
  }

  useEffect(() => {setForm({
    product_id: props.id,
    rating: Number(starRating),
    summary: summary,
    body: body,
    recommend: Boolean(recommend),
    name: nickname,
    email: email,
    photos: images
  });
  if (starRating === 0) {
    setError('Star Ratings')
  } else if (!recommend) {
    setError('Recommend')
  } else if (!charSize) {
    setError('Size')
  } else if (!charWidth) {
    setError('Width')
  } else if (!charComfort) {
    setError('Comfort')
  } else if (!charQuality) {
    setError('Quality')
  } else if (!charLength) {
    setError('Length')
  } else if (!charFit) {
    setError('Fit')
  } else if (!summary) {
    setError('Summary')
  } else if (body.length < 50) {
    setError('Body')
  } else if (!nickname) {
    setError('Nickname')
  } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    setError('Email')
  } else {
    setError('')
  }
}

  , [starRating, recommend, charSize, charWidth, charComfort, charQuality, charLength, charFit, summary, body, nickname, email, images])

  return (
    <form className="form-parent" onSubmit={(e) => {e.preventDefault(); props.close(); submitReviews()}}>
      <div className="form-stars-parent">
        <p className="form-subtitle">Rating*</p>
        <div className="form-stars">
          {starRating < 1 ? <div onClick={(e) => {setStarRating('1')}}>☆</div> : <div onClick={(e) => {setStarRating('1')}}>★</div>}
          {starRating < 2 ? <div onClick={(e) => {setStarRating('2')}}>☆</div> : <div onClick={(e) => {setStarRating('2')}}>★</div>}
          {starRating < 3 ? <div onClick={(e) => {setStarRating('3')}}>☆</div> : <div onClick={(e) => {setStarRating('3')}}>★</div>}
          {starRating < 4 ? <div onClick={(e) => {setStarRating('4')}}>☆</div> : <div onClick={(e) => {setStarRating('4')}}>★</div>}
          {starRating < 5 ? <div onClick={(e) => {setStarRating('5')}}>☆</div> : <div onClick={(e) => {setStarRating('5')}}>★</div>}
        </div>
      </div>
      <div className="form-recommend">
        <p className="form-subtitle">Recommend?*</p>
        <label>
          <input type="radio" value={true} onChange={(e) => {setRecommend(e.target.value); setYNChecked('yes')}} checked={YNchecked === 'yes'}/> Yes
        </label>
        <label>
          <input type="radio" value={false} onChange={(e) => {setRecommend(e.target.value); setYNChecked('no')}} checked={YNchecked === 'no'}/> No
        </label>
      </div>
      <hr></hr>
      <div className="form-characteristics-size">
        <p className="form-subtitle">Size*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '1'} required/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">A size too small</p>
         <p className="form-p">½ a size too small</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">½ a size too big</p>
         <p className="form-p">A size too wide</p>
        </div>
      </div>
      <div className="form-characteristics-width">
      <p className="form-subtitle">Width*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '1'} required/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Too narrow</p>
         <p className="form-p">Slightly narrow</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">Slightly wide</p>
         <p className="form-p">Too wide</p>
        </div>
      </div>
      <div className="form-characteristics-comfort">
      <p className="form-subtitle">Comfort*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}} checked={comfortChecked === '1'} required/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}}  checked={comfortChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}}  checked={comfortChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}} checked={comfortChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}}  checked={comfortChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Uncomfortable</p>
         <p className="form-p">Slightly uncomfortable</p>
         <p className="form-p">Ok</p>
         <p className="form-p">Comfortable</p>
         <p className="form-p">Perfect</p>
        </div>
      </div>
      <div className="form-characteristics-quality">
      <p className="form-subtitle">Quality*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}} checked={qualityChecked === '1'} required/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}} checked={qualityChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}} checked={qualityChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}}  checked={qualityChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}} checked={qualityChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Poor</p>
         <p className="form-p">Below average</p>
         <p className="form-p">What I expected</p>
         <p className="form-p">Pretty great</p>
         <p className="form-p">Perfect</p>
        </div>
      </div>
      <div className="form-characteristics-length">
      <p className="form-subtitle">Length*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}} checked={lengthChecked === '1'} required/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}} checked={lengthChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}} checked={lengthChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}}   checked={lengthChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}}  checked={lengthChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Runs short</p>
         <p className="form-p">Runs slightly short</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">Runs slightly long</p>
         <p className="form-p">Runs long</p>
        </div>
      </div>
      <div className="form-characteristics-fit">
      <p className="form-subtitle">Fit*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '1'} required/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Runs tight</p>
         <p className="form-p">Runs slightly tight</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">Runs slightly long</p>
         <p className="form-p">Runs long</p>
        </div>
      </div>
      <hr></hr>
      <div className="form-summary">
      <p className="form-subtitle">Summary</p>
        <label>
          <input value={summary} required className="form-summary" rows={3} cols={60} maxLength={60} onChange={e => setSummary(e.target.value)} placeholder="Example: Best purchase ever!"/>
        </label>

      </div>
      <div className="form-body">
      <p className="form-subtitle">Body</p>
        <label>
          <textarea value={body} required={true} className="form-summary" rows={5} cols={60} minLength={50} maxLength={1000} onChange={e => {setBody(e.target.value); setCount(50 - e.target.value.length) }} placeholder="Why did you like the product or not?"/>
          {count > 0 ? <p style={{
            fontSize:'8pt',
            display: 'flex',
            justifyContent: 'flex-start',
            marginRight: '20px'
            }}> Minimum required characters left:{count}</p> :
            <p style={{
              fontSize:'8pt',
              display: 'flex',
              justifyContent: 'flex-start',
              marginRight: '20px'
              }}>Minimum reached</p>}
        </label>

      </div>
      <hr></hr>
      <div className="form-upload-image">
      <p className="form-subtitle">Images</p>
        <label></label>
          <input id="files" type="file" multiple="multiple" accept="image/jpeg, image/png, image/jpg" onChange={(e) => {
            if (window.File && window.FileReader && window.FileList && window.Blob) {
              const files = e.target.files;
              const output = document.querySelector("#result");
              output.innerHTML = "";
              for (let i = 0; i < files.length; i++) {
                console.log(files[i])
                if (!files[i].type.match("image")) continue;
                  const picReader = new FileReader();
                  picReader.addEventListener("load", function (event) {
                    const picFile = event.target;
                    const div = document.createElement("div");
                    div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
                    output.appendChild(div);
                  });
                  picReader.readAsDataURL(files[i]);
                }
            } else {
              alert("Your browser does not support File API");
            }}}/>
          <output id="result" />
      </div>
      <div className="form-nickname">
      <p className="form-subtitle">Nickname*</p>
        <label>
          <input value={nickname} required={true} className="form-summary" rows={1} cols={60} maxLength={60} onChange={e => {setNickname(e.target.value)}} placeholder="Example: jackson11!"/>
          <p style={{
            fontSize:'8pt',
            display: 'flex',
            justifyContent: 'flex-start',
            marginRight: '20px'
            }}> For privacy reasons, do not use your full name or email address</p>
        </label>

      </div>
      <div className="form-email">
      <p className="form-subtitle">Email*</p>
        <label>
          <input value={email} required={true} className="form-summary" rows={1} cols={60} maxLength={60} onChange={e => {setEmail(e.target.value)}} placeholder="Example: jackson11@email.com"/>
          <p style={{
            fontSize:'8pt',
            display: 'flex',
            justifyContent: 'flex-start',
            marginRight: '20px'
            }}> For authentication reasons, you will not be emailed</p>
        </label>

      </div>
      <div>

        {(clicked && error) ? <p style={{color: 'red'}}>You must enter the following: {error}</p> : null}
        {error ? <button onClick={(e) => {e.preventDefault(); setClicked(true)}} type="submit" className="reviews-button">Submit</button> :
        <button type="submit" className="reviews-button">Submit</button>}
      </div>
    </form>


  )
}

export default ModalForm;

