import React, { useState } from "react";
import { Link } from "react-router-dom";
import pj2 from "../assets/pj2.gif";
import { pj2_features } from "../contants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyAllIcon from '@mui/icons-material/CopyAll';
import github from "../assets/github.png";
import pongGame from '../assets/pongGame.gif'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";


const Project2Modal = ({ closeModal }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const pythonCode = `from kivy.config import Config
  Config.set('graphics', 'width', '900')
  Config.set('graphics', 'height', '400')
  Config.set('graphics', 'resizable', False)
  from kivy.app import App
  from kivy.uix.widget import Widget
  from kivy.properties import NumericProperty, StringProperty, ReferenceListProperty, ObjectProperty
  from kivy.vector import Vector
  from kivy.clock import Clock
  from kivy.uix.relativelayout import RelativeLayout
  from kivy.core.audio import SoundLoader
  
  
  WINNING_SCORE = 5
  
  class MenuWidget(RelativeLayout):
          def on_touch_down(self, touch):
              if self.opacity == 0:
                  return False
              return super(RelativeLayout, self).on_touch_down(touch)
          
  class PongGame(Widget):
      ball = ObjectProperty(None)
      player1 = ObjectProperty(None)
      player2 = ObjectProperty(None)
      menu_title = StringProperty('P  O  N  G')
      menu_button_title = StringProperty('START')
      state_game_has_started = False
      state_game_over = False
      sound_hit = SoundLoader.load("RESOURCES/audio/hit.wav")
      sound_loss = SoundLoader.load("RESOURCES/audio/loss.wav")
      sound_won = SoundLoader.load("RESOURCES/audio/won.wav")
      sound_play = SoundLoader.load("RESOURCES/audio/play.wav")
  
      def __init__(self, **kwargs):
          super(PongGame, self).__init__(**kwargs)
          self.reset_game()
  
  
      def serve_ball(self, vel=(4, 0)):
          self.ball.center = self.center
          self.ball.velocity = vel
  
      def update(self, dt):
          if not self.state_game_over:
  
              self.ball.move()
  
              # player2 Ai
              if self.ball.x > self.width / 2:
                  if self.ball.center_y > self.player2.center_y + self.player2.height / 2:
                      self.player2.move_up()
                  elif self.ball.center_y < self.player2.center_y - self.player2.height / 2:
                      self.player2.move_down()
  
              # Bounce off paddles
              self.player1.bounce_ball(self.ball)
              self.player2.bounce_ball(self.ball)
  
              # Bounce ball off bottom or top
              if (self.ball.y < self.y) or (self.ball.top > self.top):
                  self.ball.velocity_y *= -1
  
              # Went off to a side to score a point?
              if self.ball.x < self.x:
                  self.player2.score += 1
                  self.serve_ball(vel=(4, 0))
                  self.player1.center_y = self.center_y
                  self.player2.center_y = self.center_y
              if self.ball.right > self.width:
                  self.player1.center_y = self.center_y
                  self.player2.center_y = self.center_y
                  self.player1.score += 1
                  self.serve_ball(vel=(-4, 0))
  
              # Check for game over
              if self.player1.score == WINNING_SCORE:
                  self.end_game('YOU WON', self.sound_won)
              elif self.player2.score == WINNING_SCORE:
                  self.end_game('YOU LOST', self.sound_loss)
  
      def end_game(self, title, sound):
          self.state_game_over = True
          self.menu_title = f'GAME OVER {title}'
          sound.play()
          self.menu_button_title = 'RESTART'
          self.menu_widget.opacity = 1
          self.ball.center = self.center
          print(title.lower())
  
      def on_touch_move(self, touch):
          if touch.x < self.width / 3:
              self.player1.move_down() if touch.y < self.player1.center_y else self.player1.move_up()
         
      def on_menu_button_pressed(self):
          self.reset_game()
          self.serve_ball()
          self.state_game_has_started = True
          self.menu_widget.opacity = 0
          self.sound_play.play()
  
      def reset_game(self):
          self.state_game_over = False
          self.player1.score = 0
          self.player2.score = 0
          self.player1.center_y = self.center_y
          self.player2.center_y = self.center_y
  
  
      class PongPaddle(Widget):
          score = NumericProperty(0)
          sound_hit = SoundLoader.load("RESOURCES/audio/hit.wav")
          sound_hit.volume = .5
  
          def bounce_ball(self, ball):
              if self.collide_widget(ball):
                  vx, vy = ball.velocity
                  offset = (ball.center_y - self.center_y) / (self.height / 2)
                  bounced = Vector(-1 * vx, vy)
                  vel = bounced * 1.1
                  ball.velocity = vel.x, vel.y + offset
                  self.sound_hit.play()
  
          def move_up(self):
              new_y = self.y + 10  
              if new_y + self.height <= self.parent.height:
                  self.y = new_y
  
          def move_down(self):
              new_y = self.y - 10  
              if new_y >= 0:
                  self.y = new_y
  
      class PongBall(Widget):
          velocity_x = NumericProperty(0)
          velocity_y = NumericProperty(0)
          velocity = ReferenceListProperty(velocity_x, velocity_y)
  
          def move(self):
              self.pos = Vector(*self.velocity) + self.pos
  
  
  class PongApp(App):
      def build(self):
          game = PongGame()
          Clock.schedule_interval(game.update, 1.0 / 60.0)
          return game
  
  if __name__ == '__main__':
      PongApp().run()
  `;
  const kivyCode = `#:kivy 1.0.9

  <MenuWidget>:
      size: 900,400
      canvas:
          Color:
              rgba: 0,0,0,.8
          Rectangle:
              size: self.size
              
      Label:
          font_size: dp(40)
          font_name: 'RESOURCES/fonts/Sackers-Gothic-Std-Light.ttf'
          text: root.parent.menu_title
          pos_hint: {"center_x": .5, "center_y":.6}
      
      Label:
          font_size: dp(15)
          font_name: 'RESOURCES/fonts/Sackers-Gothic-Std-Light.ttf'
          text: 'FIRST TO 5 WINS'
          pos_hint: {"center_x": .5, "center_y":.47}
  
      Button:
          font_size: dp(30)
          font_name: 'RESOURCES/fonts/Eurostile.ttf'
          text: root.parent.menu_button_title
          pos_hint: {"center_x": .5, "center_y":.3}
          size_hint: .2, .15
          on_press: root.parent.on_menu_button_pressed()
          background_normal: ''
          background_color: 1,.3,.4,.85
  
  <PongBall>:
      size: 70, 70 
      canvas:
          Ellipse:
              pos: self.pos
              size: self.size  
              source:'RESOURCES/images/moon.png'        
  
  
  <PongPaddle>:
      size: 25, 150
      canvas:
          Color:
              rgb: 1, 1, 1
          Rectangle:
              pos: self.pos
              size: self.size
              
  
  
  <PongGame>:
  
      canvas.before:
          Rectangle:
              size: self.size
              source:'RESOURCES/images/bg.jpg'
          
  
      canvas:
          Rectangle:
              pos: self.center_x - 5, 0
              size: 10, self.height
      
      ball: pong_ball
      player1: player_left
      player2: player_right
      menu_widget: menu_widget
  
  
      Label:
          font_size: 70  
          center_x: root.width / 2.5
          top: root.top - 10
          text: str(root.player1.score)
          
      Label:
          font_size: 70  
          center_x: root.width /1.7
          top: root.top - 10
          text: str(root.player2.score)
      
      PongBall:
          id: pong_ball
          center: self.parent.center
      
      PongPaddle:
          id: player_left
          x: self.width 
          center_y: root.center_y
  
      PongPaddle:
          id: player_right
          x: root.width - self.width * 2
          center_y: root.center_y
      
      MenuWidget:
          id: menu_widget
          center: self.parent.center
  `;
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    const codeToCopy = selectedLanguage === "python" ? pythonCode : kivyCode;
    const textArea = document.createElement("textarea");
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setIsCopied(true);

    // Reset the copied state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="project_modal">
      <div
        className="modal__container "
        data-aos="fade-left"
        data-aos-once="true"
      >
        <div className="modal_exit">
          <FontAwesomeIcon
            icon="fa-times"
            className="project_model__exit click"
            onClick={() => closeModal(false)}
          />
        </div>
        <header className="section__container header__container">
          <div className="header__content">
            <span className="bg__blur"></span>
            <span className="bg__blur header__blur-"></span>
            <h1>
              <div className="header__content-span"> Pong Game</div> App with AI
            </h1>
            <p>
              The Pong Game App is a Python-based mobile application developed
              using the Kivy framework, offering a modern and engaging gaming
              experience. This classic Pong game is enhanced with the inclusion
              of an Artificial Intelligence (AI) opponent, adding an extra layer
              of challenge for players.
            </p>
            <div className="links">
              <Link to="https://github.com/Abde-T/Pong" target="_blank">
                <button className="btn-"> Download game</button>
              </Link>
              <Link to="https://github.com/Abde-T/Pong" target="_blank">
                <button className="github_btn">
                  <img src={github} alt="" className="github- unselectable" loading="lazy"/>
                </button>
              </Link>
            </div>
          </div>
          <div className="header_image">
            <img src={pj2} alt="logo" className="landing unselectable" loading="lazy"/>
          </div>
        </header>
        <section className="section__container explore__container">
          <div className="explore__header">
            <h2 className="section__header">WEBSITE FEATURES:</h2>
          </div>
          <div className="explore__grid">
            {pj2_features.map((project, index) => (
              <div key={index} className="explore__card-">
                <h4>{project.h1}</h4>
                <p>{project.p}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section__container class__container details_container-">
          <div className="class__image">
            <span className="bg__blur "></span>
            <img src={pongGame} alt="class" className="class__img-2 unselectable" loading="lazy"/>
          </div>
          <div className="class__content">
            <h2 className="section__header">The Pong Game App</h2>
            <p>
              Offers a blend of nostalgia and modern gaming, providing users
              with an entertaining and challenging experience. The
              implementation of an AI opponent showcases a commitment to pushing
              the boundaries of traditional game development, offering users a
              dynamic and adaptive gaming experience. The project highlights
              expertise in Python and Kivy, illustrating the ability to create
              engaging applications.
            </p>
            <Link to="https://rmp-abde-t.vercel.app/">
              <button className="btn-">Download game</button>
            </Link>
          </div>
        </section>
        <div className="code_wrapper">
          <div className="code_buttons">
            <div className="code_btns">
              <button
                className={
                  selectedLanguage === "kivy"
                    ? "selected-button"
                    : "deselected-button"
                }
                onClick={() => setSelectedLanguage("python")}
              >
                Python
              </button>
              <button
                className={
                  selectedLanguage === "python"
                    ? "selected-button"
                    : "deselected-button"
                }
                onClick={() => setSelectedLanguage("kivy")}
              >
                Kivy
              </button>
            </div>
            {isCopied && (
              <span className="copy">
                Copied!
              </span>
            )}
            <button onClick={handleCopyClick} className="copy_btn"><CopyAllIcon/></button>
          </div>
          <div className="code">
            <SyntaxHighlighter
              language="python"
              style={base16AteliersulphurpoolLight}
              customStyle={{ padding: "25px", }}
            >
              {selectedLanguage === "python" ? pythonCode : kivyCode}
            </SyntaxHighlighter>
          </div>
        </div>
        <span className="bg__blur "></span>
      </div>
    </div>
  );
};

export default Project2Modal;
