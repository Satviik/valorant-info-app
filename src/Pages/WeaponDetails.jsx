import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function WeaponDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [weapon, setWeapon] = useState(null);
  const [currentSkin, setCurrentSkin] = useState(0);

  useEffect(() => {
    fetch(`https://valorant-api.com/v1/weapons/${id}`)
      .then((res) => res.json())
      .then((data) => setWeapon(data.data));
  }, [id]);

  if (!weapon) {
    return <p className="text-white p-6">Loading...</p>;
  }
  const skins = weapon.skins.filter(
    (skin) => skin.displayIcon || skin.levels[0]?.displayIcon
  );

  const nextSkin = () => {
    setCurrentSkin((prev) => (prev + 1) % skins.length);
  };

  const prevSkin = () => {
    setCurrentSkin((prev) =>
      prev === 0 ? skins.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <button
        onClick={() => navigate(-1)}
        className="text-gray-400 hover:text-white mb-6"
      >
        ← Back
      </button>
      <div className="flex gap-10">
        <div className="w-1/2 flex flex-col justify-center items-center gap-20">
          <img
            src={weapon.displayIcon}
            className="max-h-[75vh] object-contain mt-50"
          />
          <div className=" w-full">
            <h2 className="text-lg font-semibold mb-4 text-center">Skins</h2>

            <div className="flex items-center justify-center gap-8">
              <button onClick={prevSkin} className="text-3xl hover:text-gray-400">
                ←
              </button>

              <div className="text-center">
                <img
                  src={
                    skins[currentSkin].displayIcon ||
                    skins[currentSkin].levels[0]?.displayIcon
                  }
                  className="h-28 object-contain mx-auto"
                />

                <p className="mt-2 text-gray-300">
                  {skins[currentSkin].displayName}
                </p>
              </div>

              <button onClick={nextSkin} className="text-3xl hover:text-gray-400">
                →
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: INFO */}
        <div className="w-1/2">

          <h1 className="text-5xl font-bold mb-4">
            {weapon.displayName}
          </h1>

          <p className="text-gray-400 mb-8">
            {weapon.description || "Standard issue weapon."}
          </p>

          {/* STATS */}
          {weapon.weaponStats && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Stats</h2>

              <div className="grid grid-cols-2 gap-4 mb-8">

                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Fire Rate</p>
                  <p className="text-xl font-semibold">
                    {weapon.weaponStats.fireRate}
                  </p>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Magazine</p>
                  <p className="text-xl font-semibold">
                    {weapon.weaponStats.magazineSize}
                  </p>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Reload</p>
                  <p className="text-xl font-semibold">
                    {weapon.weaponStats.reloadTimeSeconds}s
                  </p>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Penetration</p>
                  <p className="text-xl font-semibold">
                    {weapon.weaponStats.wallPenetration?.split("::")[1]}
                  </p>
                </div>

              </div>
            </>
          )}

          {/* DAMAGE */}
          {weapon.weaponStats?.damageRanges && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Damage</h2>

              <div className="space-y-4">
                {weapon.weaponStats.damageRanges.map((range, i) => (
                  <div
                    key={i}
                    className="bg-gray-900 p-4 rounded-lg flex justify-between"
                  >
                    <p className="text-gray-400 text-sm">
                      {range.rangeStartMeters}m - {range.rangeEndMeters}m
                    </p>

                    <div className="flex gap-6 text-sm">
                      <p>Head: <span className="font-semibold">{range.headDamage}</span></p>
                      <p>Body: <span className="font-semibold">{range.bodyDamage}</span></p>
                      <p>Leg: <span className="font-semibold">{range.legDamage}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>

    </div>
  );
}