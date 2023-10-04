import Heading from "@/components/page/heading";
import SubscriptionButton from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { LuSettings } from "react-icons/lu";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={LuSettings}
        color="text-gray-700"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-slate-500">
          {isPro
            ? "You are currently on a pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};
export default SettingsPage;
