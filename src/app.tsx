import * as React from "react";

interface Props {
    observer: IntersectionObserver;
}
interface State {}

export class App extends React.Component<Props, State> {

    private observeRef = (ref: HTMLDivElement | null) => {
        if (ref === null) {
            return;
        }
        this.props.observer.observe(ref as Element);
        console.log(`${ref.id} observed`);
    };

    public constructor(props: Props) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <>
                {[1,2,3,4,5,6,7,8,9].map((key) => {
                    const id = `article-${key}`;
                    return (
                        <div key={key} id={id} className="article" ref={this.observeRef}>{key}</div>
                    );
                })}
            </>
        );
    }

    public componentDidMount() {

    }
}
