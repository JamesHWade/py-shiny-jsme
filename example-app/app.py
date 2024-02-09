# pyright: basic

from jsme_widget import jsme_widget


from shiny import App, render, ui

app_ui = ui.page_fluid(jsme_widget("myComponent"))


def server(input, output, session):
    None


app = App(app_ui, server)
