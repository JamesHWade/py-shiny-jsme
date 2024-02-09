from pathlib import PurePath

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
        "jsme-widget",
        jsme_widget_deps,
        id=resolve_id(id),
    )
