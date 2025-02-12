
import Button from "@components/Button";

interface Props {

}

const NotFound: React.FC<Props> = (props) => {
  const {

  } = props;


  return (
    <div className="container flex justify-center items-center">
    <div
      className="min-h-[500px] text-center pt-20 flex flex-col justify-center items-center w-full h-full"
    >
      <h1 className="h3 mb-4">404: Page Not Found</h1>
      <div>
        <p>The page you are looking for does not exist.</p>
        <div>
          <Button className="mt-10 relative" white arrowAfter>
            Return to Homepage
            <a className="absolute w-full h-full" href="/"></a>
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NotFound;
