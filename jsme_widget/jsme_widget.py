from pathlib import PurePath

from htmltools import HTMLDependency, Tag

from shiny.module import resolve_id

from htmltools import HTMLDependency, Tag
from shiny.module import resolve_id

jsme_widget_deps = HTMLDependency(
    "jsme-widget",
    "0.0.1",
    source={
        "package": "jsme_widget",
        "subdir": "distjs",
    },
    script={"src": "index.js", "type": "module"},
)


def jsme_widget(id: str):
    """A shiny input for the JSME widget."""
    return Tag(
        # This is the name of the custom tag we created with our webcomponent
        "jsme-widget",
        jsme_widget_deps,
        # Use resolve_id so that our component will work in a module
        id=resolve_id(id),
    )
