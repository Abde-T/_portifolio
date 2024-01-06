const fakeShop = "https://ik.imagekit.io/lqn2gvopq/pj3.gif?updatedAt=1704353426222"
const rmp = 'https://ik.imagekit.io/lqn2gvopq/rmp.gif?updatedAt=1704353497565'
const css = 'https://ik.imagekit.io/lqn2gvopq/css1.png?updatedAt=1704352972985'
const html = 'https://ik.imagekit.io/lqn2gvopq/html1.png?updatedAt=1704352988720'
const javascript = 'https://ik.imagekit.io/lqn2gvopq/js.png?updatedAt=1704352996156'
const next = 'https://ik.imagekit.io/lqn2gvopq/next1.png?updatedAt=1704353007729'
const reactjs = 'https://ik.imagekit.io/lqn2gvopq/react.png?updatedAt=1704353019160'
const tailwind = 'https://ik.imagekit.io/lqn2gvopq/tailwind.png?updatedAt=1704353024228'
const MongoBD = 'https://ik.imagekit.io/lqn2gvopq/mongodb.png?updatedAt=1704353002585'
const Nodejs = 'https://ik.imagekit.io/lqn2gvopq/nodejs.png?updatedAt=1704353014426'
const Expressjs = 'https://ik.imagekit.io/lqn2gvopq/expressjs.png?updatedAt=1704352981173'
const mui = 'https://ik.imagekit.io/lqn2gvopq/mui.png?updatedAt=1704353008343'
const redux = 'https://ik.imagekit.io/lqn2gvopq/redux.png?updatedAt=1704353023216'
const Python = 'https://ik.imagekit.io/lqn2gvopq/python.png?updatedAt=1704353016286'
const kivy = 'https://ik.imagekit.io/lqn2gvopq/kivy.png?updatedAt=1704352998604'
import snake from '../assets/snake.gif'
import pygame from '../assets/pygame.png'

const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: Python },
  { name: "MongoDB", icon: MongoBD },
  { name: "ExpressJS", icon: Expressjs },
  { name: "ReactJS", icon: reactjs },
  { name: "NodeJS", icon: Nodejs },
  { name: "NextJS", icon: next },
  { name: "TailwindCss", icon: tailwind },
  
];

const project1tech = [
  { name: "MongoDB", image: MongoBD },
  { name: "ExpressJS", image: Expressjs },
  { name: "ReactJS", image: reactjs },
  { name: "NodeJS",image: Nodejs },
  { name: "CSS3", image: css },
  { name: "MUI",image: mui },
  { name: "Redux", image: redux },
];
const project1 = [
  {
    name: "Review My Project (RMP)",
    image: rmp,
    github: "https://github.com/Abde-T/rmp",
    link: "https://rmp-abde-t.vercel.app/",
  },
];

const project2tech = [
  {name: "Python", image: Python },
  {name: "pygame", image: pygame },
  
];

const project2 = [
  {
    name: "Snake Game",
    image: snake,
    github: "https://github.com/Abde-T/Snake",
    link: "https://github.com/Abde-T/Snake",
  },
];

const project3 = [
  {
    name: "Fake Shop",
    image: fakeShop,
    github: "https://github.com/Abde-T/Fake-shop",
    link: "https://fake-shop-three.vercel.app/",
  },
];

const project3tech = [
  { name: "HTML5", image: html },
  { name: "CSS3", image: css },
  { name: "JavaScript", image: javascript },
  { name: "ReactJS", image: reactjs },
];

const pj1_features = [
  {
    h1: "User Authentication",
    p: " Implemented secure user authentication, allowing users to register, log in, and securely authenticate their identity.",
  },
  {
    h1: "CRUD Functionality",
    p: " Developed robust CRUD (Create, Read, Update, Delete) operations, enabling users to post, edit, and delete their projects seamlessly.",
  },
  {
    h1: "Interactivity with Likes and Comments",
    p: " Integrated features for users to express appreciation through likes and engage in discussions through comments, promoting community interaction.",
  },
  {
    h1: "Pagination for Enhanced User Experience",
    p: "Implemented pagination for efficient content navigation, enhancing the user experience, especially as the volume of content grows.",
  },
  {
    h1: "Responsive and Dynamic Design",
    p: " Ensured a responsive design, making the website accessible and visually appealing across various devices. Dynamic elements provide a modern and engaging user interface.",
  },
  {
    h1: "Performance Optimization",
    p: " Implemented compression and caching middleware to optimize website performance. This results in faster loading times and improved overall responsiveness.",
  },
  {
    h1: "Tech Stack Mastery",
    p: "Showcased proficiency in the MERN stack, utilizing MongoDB for the database, Express.js for server-side logic, React for the frontend, and Node.js for server-side execution.",
  },
  {
    h1: "Version Control and Deployment",
    p: "Utilized version control (Github) for efficient collaboration and deployed the application to a hosting platform for public access.",
  },
];

const pj2_features = [
  {
    h1: "AI Integration",
    p: "Developed sophisticated AI algorithms to control the movements of the opponent snake, offering players an adaptive and challenging gaming experience.",
  },
  {
    h1: "User Interface",
    p: "Designed a visually appealing and user-friendly interface with vibrant graphics, intuitive controls, and dynamic animations to captivate players of all ages.",
  },
  {
    h1: "Game Mechanics",
    p: "Implemented core game mechanics such as collision detection, scoring systems, and level progression, ensuring a balanced and enjoyable gameplay loop.",
  },
  {
    h1: "Code Structure",
    p: "Utilized efficient coding practices and object-oriented programming concepts to create a scalable and maintainable codebase, facilitating future updates and enhancements.",
  },
];

const pj3_features = [
  {
    h1: "React Framework",
    p: " Implemented the project using the React framework, ensuring a modular and efficient front-end structure.",
  },
  {
    h1: "Fake Store API Integration",
    p: "Utilized the Fake Store API to dynamically fetch and display product information, including images, descriptions, and prices, offering users a realistic shopping experience.",
  },
  {
    h1: "Pagination",
    p: "Implemented a robust pagination system, enabling users to navigate seamlessly through different product pages, improving overall user experience.",
  },
  {
    h1: "Shopping Cart Functionality",
    p: "Developed a user-friendly shopping cart feature that allows users to add, remove, and view selected items. The cart displays a summary of products along with their individual prices and a total amount.",
  },
  {
    h1: "Responsive Design",
    p: "Ensured a responsive design to provide a consistent and visually appealing experience across various devices, including desktops, tablets, and mobile phones.",
  },
];


const code = `import pygame, sys, random, asyncio
from pygame.math import Vector2
  
  
  class SNAKE:
      def __init__(self, is_ai=False):
          self.is_ai = is_ai
          self.body = [Vector2(18, 5), Vector2(18, 4), Vector2(18, 3)] if is_ai else [Vector2(5, 10), Vector2(4, 10), Vector2(3, 10)]
          self.direction = Vector2(0, 0)
          self.new_block = False
          self.load_images()
  
      @staticmethod
      def invert_image_colors(image):
          pixels = pygame.PixelArray(image)
          for x in range(image.get_width()):
              for y in range(image.get_height()):
                  r, g, b, a = image.get_at((x, y))
                  inverted_color = (255 - r, 255 - g, 255 - b, a)
                  pixels[x, y] = inverted_color
          del pixels
          return image
      
      def load_images(self):
          paths = [
              'head_up', 'head_down', 'head_right', 'head_left',
              'tail_up', 'tail_down', 'tail_right', 'tail_left',
              'body_vertical', 'body_horizontal',
              'body_topright', 'body_topleft', 'body_bottomright', 'body_bottomleft'
          ]
  
          for path in paths:
              setattr(self, path, pygame.image.load(f'./Graphics/{path}.png').convert_alpha())

              image = pygame.image.load(f'./Graphics/{path}.png').convert_alpha()
              inverted_image = self.invert_image_colors(image)
              setattr(self, f"{path}_ai", inverted_image)
  
          self.hit = pygame.mixer.Sound('./hit.wav')
  
      def draw_snake(self):
          self.update_head_graphics()
          self.update_tail_graphics()
  
          for index, block in enumerate(self.body): 
              x_pos = block.x * cell_size
              y_pos = block.y * cell_size   
              block_rect = pygame.Rect(x_pos,y_pos , cell_size, cell_size)
  
              if index == 0: 
                  screen.blit(self.head ,block_rect)
              elif index == len(self.body) - 1:
                  screen.blit(self.tail, block_rect)
              else:
                  previous_block = self.body[index + 1] - block 
                  next_block = self.body[index - 1] - block 
                  if previous_block.x == next_block.x:
                      if self.is_ai:
                          screen.blit(self.body_vertical_ai, block_rect)
                      else:
                          screen.blit(self.body_vertical, block_rect)
                  elif previous_block.y == next_block.y:
                      if self.is_ai:
                          screen.blit(self.body_horizontal_ai, block_rect)
                      else:
                          screen.blit(self.body_horizontal, block_rect)
                  else:
                      if previous_block.x == -1 and next_block.y == -1 or previous_block.y == -1 and next_block.x == -1:    
                          if self.is_ai:
                              screen.blit(self.body_topleft_ai, block_rect)
                          else:
                              screen.blit(self.body_topleft, block_rect)
                      elif previous_block.x == 1 and next_block.y == -1 or previous_block.y == -1 and next_block.x == 1:    
                          if self.is_ai:
                              screen.blit(self.body_topright_ai, block_rect)
                          else:
                              screen.blit(self.body_topright, block_rect)
                      elif previous_block.x == 1 and next_block.y == 1 or previous_block.y == 1 and next_block.x == 1:    
                          if self.is_ai:
                              screen.blit(self.body_bottomright_ai, block_rect)
                          else:
                              screen.blit(self.body_bottomright, block_rect)
                      elif previous_block.x == -1 and next_block.y == 1 or previous_block.y == 1 and next_block.x == -1:    
                          if self.is_ai:
                              screen.blit(self.body_bottomleft_ai, block_rect)
                          else:
                              screen.blit(self.body_bottomleft, block_rect)
              
  
      def update_head_graphics(self):
          head_relation = self.body[1] - self.body[0]
          if head_relation == Vector2(1,0): 
              if self.is_ai:
                  self.head = self.head_left_ai
              else:
                  self.head = self.head_left
          elif head_relation == Vector2(-1,0): 
              if self.is_ai:
                  self.head = self.head_right_ai
              else:
                  self.head = self.head_right
          elif head_relation == Vector2(0,1): 
              if self.is_ai:
                  self.head = self.head_up_ai
              else:
                  self.head = self.head_up
          elif head_relation == Vector2(0,-1): 
              if self.is_ai:
                  self.head = self.head_down_ai
              else:
                  self.head = self.head_down
  
      def update_tail_graphics(self):
          tail_relation = self.body[-2] - self.body[-1]
          if tail_relation == Vector2(1,0): 
              if self.is_ai:
                  self.tail = self.tail_left_ai
              else:
                  self.tail = self.tail_left
          elif tail_relation == Vector2(-1,0): 
              if self.is_ai:
                  self.tail = self.tail_right_ai
              else:
                  self.tail = self.tail_right
          elif tail_relation == Vector2(0,1): 
              if self.is_ai:
                  self.tail = self.tail_up_ai
              else:
                  self.tail = self.tail_up
          elif tail_relation == Vector2(0,-1): 
              if self.is_ai:
                  self.tail = self.tail_down_ai
              else:
                  self.tail = self.tail_down
     
      def move_snake(self, fruit_position):
          if self.is_ai:
              to_fruit= fruit_position - self.body[0]
              if to_fruit.x > 0:
                  self.direction = Vector2(1, 0)
              elif to_fruit.x < 0:
                  self.direction = Vector2(-1, 0)
              elif to_fruit.y > 0:
                  self.direction = Vector2(0, 1) 
              elif to_fruit.y < 0:
                  self.direction = Vector2(0, -1)
  
              if self.new_block == True:
                  body_copy = self.body[:]
                  body_copy.insert(0, body_copy[0] + self.direction)
                  self.body = body_copy[:] 
                  self.new_block = False
              else:
                  body_copy = self.body[:-1]
                  body_copy.insert(0, body_copy[0] + self.direction)
                  self.body = body_copy[:] 
          else:
              if self.new_block == True:
                  body_copy = self.body[:]
                  body_copy.insert(0, body_copy[0] + self.direction)
                  self.body = body_copy[:] 
                  self.new_block = False
              else:
                  body_copy = self.body[:-1]
                  body_copy.insert(0, body_copy[0] + self.direction)
                  self.body = body_copy[:] 
  
      def add_block(self):
          self.new_block = True
  
      def play_sound(self):
          self.hit.play()    
      
      def reset(self):
          self.direction = Vector2(0,0)
          if self.is_ai:
              self.body = [Vector2(18,5), Vector2(18,4), Vector2(18,3)]
          else:
              self.body = [Vector2(5,10), Vector2(4,10), Vector2(3,10)]
  
  class Fruit:
      def __init__(self):
          self.randomize()
  
      def draw_fruit(self):
          fruit_rect = pygame.Rect(self.pos.x * cell_size, self.pos.y * cell_size, cell_size, cell_size)
          screen.blit(apple, fruit_rect)
  
      def randomize(self):
          self.x = random.randint(0, cell_number - 1)
          self.y = random.randint(0, cell_number - 1)
          self.pos = Vector2(self.x, self.y)
  
  class MAIN:
      def __init__(self):
          self.snake = SNAKE()
          self.snake_ai = SNAKE(is_ai=True)
          self.fruit = Fruit()
          
      def update(self):
          fruit_position = self.fruit.pos
          self.snake.move_snake(fruit_position)
          self.snake_ai.move_snake(fruit_position)
          self.check_collision()
          self.check_fail()
  
      def draw_elements(self):
          self.draw_grass()
          self.fruit.draw_fruit()
          self.snake.draw_snake()
          self.snake_ai.draw_snake()
          self.draw_score()
  
      def check_collision(self):
          if self.fruit.pos == self.snake.body[0]:
              self.fruit.randomize()
              self.snake.add_block()
              self.snake.play_sound()
          elif self.fruit.pos == self.snake_ai.body[0]:
              self.fruit.randomize()
              self.snake_ai.add_block()
              self.snake_ai.play_sound()
  
          
          for block in self.snake.body[1:] or block in self.snake_ai.body[1:]:
              if block == self.fruit.pos:
                  self.fruit.randomize()
  
      def check_fail(self):
          if not 0 <= self.snake.body[0].x < cell_number or not 0 <= self.snake.body[0].y < cell_number:
                  self.game_over()
  
          if not 0 <= self.snake_ai.body[0].x < cell_number or not 0 <= self.snake_ai.body[0].y < cell_number:
                  self.ai_game_over()
          
          for block in self.snake.body[1:]:
              if self.snake.body[0] == block:
                  self.game_over()
          
          for block in self.snake_ai.body[1:]:
              if self.snake_ai.body[0] == block:
                  self.ai_game_over()
  
      def draw_grass(self):
          grass_color = (10, 105, 50)
          grass_color1 = (50, 120, 50)
          for row in range(cell_number):
              if row % 2 == 0:
                  for col in range(cell_number):
                      if col % 2 == 0:
                          grass_rect = pygame.Rect(col * cell_size,row * cell_size , cell_size,cell_size)
                          screen.blit(grassy, grass_rect)
              else:
                  for col in range(cell_number):
                      if col % 2 != 0:
                          grass_rect = pygame.Rect(col * cell_size,row * cell_size , cell_size,cell_size)
                          screen.blit(grassy, grass_rect)
  
              if row % 2 != 0:
                  for col in range(cell_number):
                      if col % 2 == 0:
                          grass_rect = pygame.Rect(col * cell_size,row * cell_size , cell_size,cell_size)
                          screen.blit(stone, grass_rect)
              else:
                  for col in range(cell_number):
                      if col % 2 != 0:
                          grass_rect = pygame.Rect(col * cell_size,row * cell_size , cell_size,cell_size)
                          screen.blit(stone, grass_rect)
  
              if row % 2 == 0:
                  for col in range(cell_number):
                      if col % 2 == 0:
                          grass_rect = pygame.Rect(col * cell_size,row * cell_size , cell_size,cell_size)
                          pygame.draw.rect(screen, grass_color1, grass_rect,2)
              else:
                  for col in range(cell_number):
                      if col % 2 != 0:
                          grass_rect = pygame.Rect(col * cell_size,row * cell_size , cell_size,cell_size)
                          pygame.draw.rect(screen, grass_color1, grass_rect,1)
              
      
      def draw_score(self):
          score_text = 'score: ' + str(len(self.snake.body) - 3)
          score_surface = game_font.render(score_text,True,(56,75,15))
          score_x = int(cell_size + 60)
          score_y = int(cell_size * cell_number - 40)
          score_rect = score_surface.get_rect( center = (score_x, score_y))
          apple_rect = apple.get_rect(midright = (score_rect.left, score_rect.centery))
          bg_rect = pygame.Rect(apple_rect.left,apple_rect.top , apple_rect.width+score_rect.width+6, apple_rect.height)
  
          pygame.draw.rect(screen, (7,109,61), bg_rect)
          screen.blit(score_surface, score_rect)
          screen.blit(apple, apple_rect)
          pygame.draw.rect(screen, (56,75,15), bg_rect, 2)
  
          computer_score_text = 'computer_score: ' + str(len(self.snake_ai.body) - 3)
          computer_score_surface = game_font.render(computer_score_text,True,(56,75,15))
          computer_score_x = int(cell_size * cell_number - 120)
          computer_score_y = int(cell_size * cell_number - 40)
          computer_score_rect = computer_score_surface.get_rect( center = (computer_score_x, computer_score_y))
          apple1_rect = apple.get_rect(midright = (computer_score_rect.left, computer_score_rect.centery))
          bg1_rect = pygame.Rect(apple1_rect.left,apple1_rect.top , apple1_rect.width+computer_score_rect.width+6, apple1_rect.height)
  
          pygame.draw.rect(screen, (7,109,61), bg1_rect)
          screen.blit(computer_score_surface, computer_score_rect)
          screen.blit(apple, apple1_rect)
          pygame.draw.rect(screen, (56,75,15), bg1_rect, 2)
  
      def game_over(self):
          self.snake.reset()     
      def ai_game_over(self):
          self.snake_ai.reset()  
  
  
  
  pygame.mixer.pre_init(44100, -16, 2, 512)
  pygame.init()
  
  cell_size = 40
  cell_number = 20
  screen = pygame.display.set_mode((cell_number * cell_size, cell_number * cell_size))
  clock = pygame.time.Clock()
  apple = pygame.image.load('./Graphics/apple.png').convert_alpha()
  stone = pygame.image.load('./Graphics/stone.png').convert_alpha()
  grassy = pygame.image.load('./Graphics/grassy.png').convert_alpha()
  game_font = pygame.font.Font(None,25)
  
  SCREEN_UPDATE = pygame.USEREVENT
  pygame.time.set_timer(SCREEN_UPDATE, 150)
  
  main_game = MAIN()
  
  async def main():
      while True:
          for event in pygame.event.get():
              if event.type == pygame.QUIT:
                  pygame.quit()
                  sys.exit()
              if event.type == SCREEN_UPDATE:
                  main_game.update()
              if event.type == pygame.KEYDOWN:
                  if event.key == pygame.K_UP:
                      if main_game.snake.direction.y !=1:
                          main_game.snake.direction = Vector2(0,-1)
                  if event.key == pygame.K_DOWN:
                      if main_game.snake.direction.y != -1:
                          main_game.snake.direction = Vector2(0,1)
                  if event.key == pygame.K_RIGHT:
                      if main_game.snake.direction.x !=-1:
                          main_game.snake.direction = Vector2(1,0)
                  if event.key == pygame.K_LEFT:
                      if main_game.snake.direction.x !=1:
                          main_game.snake.direction = Vector2(-1,0)
  
          screen.fill((7,109,61))
          main_game.draw_elements()
          pygame.display.update()
          clock.tick(60) 
          await asyncio.sleep(0)
  
  asyncio.run(main())`

export {
  project1,
  project2,
  project3,
  technologies,
  pj2_features,
  pj1_features,
  project1tech,
  project2tech,
  project3tech,
  pj3_features,
  code,
};
