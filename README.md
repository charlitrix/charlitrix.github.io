# OLET CHARLES WEBSITE
The website is a single page application developed using quasar framework and hosted using github pages.  

The website contains details on Olet Charles' professional journey as a developer including some of the projects he has been apart of.  


# How to create an spa app with Quasar

1. Start by install nodejs by following instructions from the node js website [Nodejs website](https://nodejs.org/en).

2. Install [Quasar](https://quasar.dev/start/quasar-cli) commandline tool.  
Using npm  
    ```
    npm i -g @quasar/cli
    ```  
3. Next, create a project using quasar cli.  
    ```
    npm init quasar
    ```
    Running the command will prompt questions to be used to create the project scaffold containing files and folders of how the project is organized. Follow prompt instructions to create project.

4. After, navigate to project directory and run project.  
    ```
    quasar dev
    ```
5. To compile the app for hosting, run  
    ```
    quasar build
    ```  
    Find project files for hosting in `[your project folder]/dist/spa`.
    For more details to developing quasar applications checkout the **[Quasar Website](https://quasar.dev)**.