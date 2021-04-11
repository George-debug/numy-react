/**
 * Measure's the element's bounding box and then renders children
 */
import React from "react";
import debounce from "debounce";

class MeasureAndRender extends React.Component {
    state = {
        measurement: null,
        hasMeasured: false,
    };

    onWindowResize = debounce(() => {
        this.setState({
            measurement: this.el.getBoundingClientRect(),
        });
    }, this.props.debounce || 100);

    componentDidMount() {
        this.setState({
            measurement: this.el.getBoundingClientRect(),
            hasMeasured: true,
        });

        window.addEventListener("resize", this.onWindowResize);
    }

    componentWillUnmount() {
        // stop listening to window resize
        window.removeEventListener("resize", this.onWindowResize);
    }

    render() {
        let style = {};
        if (this.props.stretch) {
            style.position = "absolute";
            style.top = 0;
            style.right = 0;
            style.bottom = 0;
            style.left = 0;
        }

        const childrenWithProps = React.Children.map(
            this.props.children,
            (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        size: this.state.measurement,
                    });
                }
                return child;
            }
        );

        return (
            <div
                className={this.props.className}
                style={style}
                ref={(node) => {
                    this.el = node;
                }}
            >
                {this.state.hasMeasured && childrenWithProps}
            </div>
        );
    }
}

export default MeasureAndRender;
