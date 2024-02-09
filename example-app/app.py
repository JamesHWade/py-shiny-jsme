# pyright: basic

from jsme_widget import jsme_widget


from shiny import App, render, ui

app_ui = ui.page_fluid(jsme_widget("myComponent"))


def server(input, output, session):
    @render.text
    def valueOut():
        return f"Value from input is {input.myComponent()}"


app = App(app_ui, server)
