import Head from 'next/head'
import Image from 'next/image'
import layout from '../styles/Layout.module.css'
import grid from '../styles/Grid.module.css'
import form from '../styles/Form.module.css'
import setup from '../styles/Setup.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Setup page</title>
        <link type="text/css" rel="stylesheet" href="typography.css"></link>
      </Head>
      <div  >
        <div className={grid.container}>
          {/*Add question button */}

          <div className={grid.row}>
            <div className={grid.col_10}>
              <h1>Opsætning af spørgeskema</h1>
            </div>
            <div className={grid.col_2}>
              <button className={`${form.btn} ${form.btn_secondary}`} id="btnAddQuestion">
                Opret spørgsmål
              </button>
            </div>
          </div>

          
          {/*Questions */}

          <div className={grid.row}>
            <div className={grid.col_12}>
              <div className={layout.question} style={{paddingLeft: '10px'}}>
                <div className={setup.question_options}>
                  <div className={setup.question_option_edit} id="btnEditWelcome"></div>
                </div>
                <h3>Velkomst tekst</h3>
              </div>
              <div className={layout.question}>
                <div>
                  <div className={setup.question_type}>
                    <Image src="/icon-radiobox.png" srcset="/icon-radiobox@2x.png 2x" width="20px" height="20px"/>
                  </div>
                  <div className={setup.question_options}>
                    <div className={setup.question_option_edit}></div>
                    <div className={setup.question_option_delete}></div>
                    <div className={setup.question_option_sort}></div>
                  </div>
                  <h3>Spørgsmål 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.
                  </p>
                </div>
                <div className="form">
                  <div className="radio">
                    <input type="radio" name="radio-1" disabled /> Hest
                  </div>
                  <div className="radio">
                    <input type="radio" name="radio-1" disabled /> Hest
                  </div>
                  <div className="radio">
                    <input type="radio" name="radio-1" disabled /> Hest
                  </div>
                  <div className="radio">
                    <input type="radio" name="radio-1" disabled /> Hest
                  </div>
                </div>
              </div>
              <div className={layout.question}>
                <div className={setup.question_type}>
                  <Image src="/icon-checkbox.png" srcset="/icon-checkbox@2x.png 2x" width="20px" height="20px"/>
                </div>
                <div className={setup.question_options}>
                  <div className={setup.question_option_edit}></div>
                  <div className={setup.question_option_delete}></div>
                  <div className={setup.question_option_sort}></div>
                </div>
                <h3>Spørgsmål 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.
                </p>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="checkbox-1" disabled /> Hest
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="checkbox-1" disabled /> Hest
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="checkbox-1" disabled /> Hest
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="checkbox-1" disabled /> Hest
                  </label>
                </div>
              </div>
              <div className="question-placeholder">
                Placér spørgsmålet her
              </div>
              <div className={layout.question} style={{paddingLeft: '10px'}}>
                <div className={setup.question_options}>
                  <div className={setup.question_option_edit} id="btnEditClosing"></div>
                </div>
                <h3>Afslutnings tekst</h3>
              </div>
            </div>
          </div>

          {/*Download report button */}
          
          <div className={grid.row}>
            <div className={`${grid.col_2} ${grid.col_offset_8}`}>
              <a href="questionnaire.html" className={`${form.btn} ${form.btn_default}`}>
                Gå til besvarelse
              </a>
            </div>
            <div className={grid.col_2}>
              <a href="result.html" className={`${form.btn} ${form.btn_default}`}>
                Se resultat
              </a>
            </div>
          </div>
        </div>

        {/*Welcome text dialog */}

        <div className={layout.dialog_overlay} id="dialogEditWelcome">
          <div className={`${layout.dialog} ${layout.dialog_add_question}`}>
            <div className={layout.dialog_content}>
              <form className="form">
                <div className={grid.row}>
                  <div className={`${grid.col_12} ${form.fieldname}`}>
                    <label>
                      <strong>Titel</strong>
                    </label>
                  </div>
                  <div className={grid.col_12}>
                    <input type="text" />
                  </div>
                </div>
                <div className={grid.row}>
                  <div className={`${grid.col_12} ${form.fieldname}`}>
                    <label>
                      <strong>Beskrivelse</strong>
                    </label>
                  </div>
                  <div className={grid.col_12}>
                    <textarea></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className={layout.dialog_footer}>
              {/* HUSK btn_closedialog bruges af jquery OBS hvis du selector på class STEFFEN NOTE*/}
              <button className={`${layout.btn} ${form.btn_default} btn_closedialog`}>
                Annuller
              </button>
              <button className={`${layout.btn} ${form.btn_secondary}`}>
                Gem
              </button>
            </div>
          </div>
        </div>

        {/*Add question dialog */}

        <div className={layout.dialog_overlay} id="dialogAddQuestion">
          <div className={`${layout.dialog} ${layout.dialog_add_question}`}>
            <div className={layout.dialog_content}>
              <form className="form">
                <div className={grid.row}>
                  <div className={grid.col_12}>
                    <div className={form.alert}>
                      <h3>Fejlbesked</h3>
                      <ul>
                        <li>
                          Fejl 1
                        </li>
                        <li>
                          Fejl 2
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={grid.row}>
                  <div className={`${grid.col_12} ${form.fieldname}`}>
                    <label>
                      <strong>Spørgsmål</strong>
                    </label>
                  </div>
                  <div className={grid.col_12}>
                    <input type="text" />
                  </div>
                </div>
                <div className={grid.row}>
                  <div className={`${grid.col_12} ${form.fieldname}`}>
                    <label>
                      <strong>Beskrivelse</strong>
                    </label>
                  </div>
                  <div className={grid.col_12}>
                    <textarea></textarea>
                  </div>
                </div>
                <div className={grid.row}>
                  <div className={`${grid.col_3} ${form.fieldname}`}>
                    <label>
                      <strong>Svartype</strong>
                    </label>
                  </div>
                  <div className={grid.col_5}>
                    <select>
                      <option>Deltageren må kun vælge en svarmulighed</option>
                      <option>Deltageren må vælge flere af svarmulighederne</option>
                    </select>
                  </div>
                </div>
                <div className={grid.row}>
                  <div className={grid.col_12}>
                    <div style={{borderBottom: '1px solid #8a53a6',padding: '10px 0 10px 0',color: '#8a53a6'}}>
                      <h3 style={{margin: '0'}}>Svarmuligheder</h3>
                    </div>
                  </div>
                  <div className={grid.col_12}>
                    <div className={layout.question}>
                      <div className={setup.question_type}>
                        <input type="radio" disabled />
                      </div>
                      <div className={setup.question_options}>
                        <div className={setup.question_option_delete}></div>
                        <div className={setup.question_option_sort}></div>
                      </div>
                      <input type="text" />
                    </div>
                    <div className={layout.question}>
                      <div className={setup.question_type}>
                        <input type="radio" disabled />
                      </div>
                      <div className={setup.question_options}>
                        <div className={setup.question_option_delete}></div>
                        <div className={setup.question_option_sort}></div>
                      </div>
                      <input type="text" />
                    </div>
                  </div>
                  <div className={grid.col_12}>
                    {/* i button har du fjernet -> className="btn btn-secondary-line btn-inline"*/}
                    <button className={layout.btn}>
                      Tilføj svarmulighed
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className={layout.dialog_footer}>
              {/* i button har du fjernet -> btn-default */}
              <button className={`${layout.btn} btn-closedialog` }>
                Annuller
              </button>
              <button className={`${layout.btn} ${layout.btn_secondary}`}>
                Gem
              </button>
            </div>
          </div>
        </div>

        
        {/* Closing text dialog */}

        <div className={layout.dialog_overlay} id="dialogEditClosing">
          {/* i div har du fjernet -> dialog-edit-closing */}
          <div className={layout.dialog}>
            <div className={layout.dialog_content}>
              <form className="form">
                <div className={grid.row}>
                  <div className={`${grid.col_12} ${form.fieldname}`}>
                    <label>
                      <strong>Beskrivelse</strong>
                    </label>
                  </div>
                  <div className={grid.col_12}>
                    <textarea></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className={layout.dialog_footer}>
              {/* i button har du fjernet -> btn-default */}
              <button className={`${layout.btn} btn-closedialog` }>
                Annuller
              </button>
              <button className={`${layout.btn} ${layout.btn_secondary}`}>
                Gem
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
